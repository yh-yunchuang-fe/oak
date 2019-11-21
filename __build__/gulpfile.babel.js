import del from 'del'
import gulp, { src, dest, parallel, watch, series } from 'gulp'
import less from 'gulp-less'
import rename from 'gulp-rename'
import path from 'path'
import csso from 'gulp-csso'
import gulpif from 'gulp-if'
import alisa from 'gulp-wechat-weapp-src-alisa'
import uglify from 'gulp-uglify-es'
import imageMin from 'gulp-imagemin'
import print from 'gulp-print'
import changed from 'gulp-changed'
import ts from 'gulp-typescript'
import Qiniu from 'gulp-qiniu-utils'

const isProd = process.env.NODE_ENV === 'production'
const tsProject = ts.createProject(path.resolve(__dirname, '../tsconfig.json'))

// 匹配文件路径
const paths = {
    lessPath: ['../src/**/*.less', '../src/**/*.wxss'],
    tsPath: isProd ? ['../src/**/*.ts'] : ['../demo/src/**/*.ts', '../src/**/*.ts'],
    copy: ['../src/**/*.wxml', '../src/**/*.json', '../src/**/*.wxs'],
    demoStyle: ['../demo/src/**/*.less', '../demo/src/**/*.wxss', '!../demo/src/dist'],
    democopy: ['../demo/src/**/*.wxml', '../demo/src/**/*.json', '../demo/src/**/*.wxs', '!../demo/src/dist'],
    demoimages: ['../demo/src/images/*.*'],
}


const DEST = isProd ? '../dist' : '../demo/dist/'
const DemoDest = '../demo/dist/'

function _join(dirname) {
    return path.join(__dirname, '../src', dirname)
}

const uglifyOpts = {
    // mangle: false,
    compress: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        drop_console: true,
    },
}

// 路径别名配置
const alisaConfig = {
    'Style': _join('style'),
    'WXS': _join('wxs'),
    'Mixins': _join('mixins'),
}

const styles = (src, dest, base) => gulp.src(src, {
    base,
})
    .pipe(changed(dest, {
        extension: '.wxss',
    }))
    .pipe(print(filepath => `Build less: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(less())
    // .pipe(gulpif(isProd, csso({
    //     comments: false,
    // })))
    .pipe(rename({
        extname: '.wxss',
    }))
    .pipe(gulp.dest(dest))

const scripts = (src, dest) => gulp.src(src)
    .pipe(changed(dest))
    .pipe(print(filepath => `Build Js: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(tsProject())
    // .pipe(gulpif(isProd, uglify(uglifyOpts)))
    .pipe(gulp.dest(dest))


const copy = (src, dest) => gulp.src(src)
    .pipe(changed(dest))
    .pipe(print(filepath => `Copy File: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(gulp.dest(dest))

const clean = dest => del([dest], {
    force: true,
})


function srcStyle() {
    return styles(paths.lessPath, DEST, '../src')
}

function taskScripts() {
    return scripts(paths.tsPath, DEST)
}

function srcCopy() {
    return copy(paths.copy, DEST)
}

function srcClean() {
    return clean(DEST)
}

function demoStyle() {
    return styles(paths.demoStyle, DemoDest, '../demo/src')
}

function demoCopy() {
    return copy(paths.democopy, DemoDest)
}

function demoClean() {
    return clean(DemoDest)
}

function demoImagemin() {
    return gulp.src(paths.demoimages)
        .pipe(changed(`${DemoDest}/images/`))
        .pipe(print(filepath => `Compress Image: ${filepath}`))
        .pipe(imageMin())
        .pipe(gulp.dest(`${DemoDest}/images/`))
}

function watchFiles() {
    gulp.watch(paths.lessPath, srcStyle)
    gulp.watch(paths.tsPath, taskScripts)
    gulp.watch(paths.copy, srcCopy)
    gulp.watch(paths.democopy, demoCopy)
    gulp.watch(paths.demoStyle, demoStyle)
    gulp.watch(paths.demoimages, demoImagemin)

    console.log('\r\nStart watch file...\r\n')
    // cb();
}

// 图片压缩后再上传七牛, 上传后的URL为： https://static.yonghuivip.com/wechatapp/static/ + images或fonts/ + 文件名
// 七牛相关配置
const qiniuOptions = {
    ak: 'rqLh8BpwLdcGV-176gGueGEK3EAYpE0sg-TaASlT',
    sk: 'UiUBP4KH0zbPa2O15B5VM5RNbPv2fO7r6qHu6olC',
    zone: 'Zone_z0', // 空间对应存储区域（华东：z0，华北：z1，华南：z2，北美：na0
    bucket: 'yhcms', // 七牛对应空间
    upload: {
        dir: '../static/', // 上传本地目录
        prefix: 'wechatapp/', // 上传时添加的前缀，可省略
        except: /\.(html|js)$/, // 上传时不上传文件的正则匹配
    },
    remote: {
        url: 'https://static.yonghuivip.com/', // 七牛空间域名
        prefix: {
            default: 'wechatapp/', // 七牛空间默认前缀，如果下面三个相同可省略
        },
    },
}

function uploadImageMini() {
    return src('static/images/*.*')
        .pipe(print(filepath => `Compress Image: ${filepath}`))
        .pipe(imageMin())
        .pipe(dest('static/images/'))
}

async function upload2Qiniu(cb) {

    const qiniu = new Qiniu(qiniuOptions)
    await qiniu.upload()

    cb()
}

exports.uploadImageMini = uploadImageMini
exports.upload2Qiniu = upload2Qiniu

let build

if (isProd) {
    build = gulp.series(srcClean, gulp.parallel(srcStyle, taskScripts, srcCopy))
} else {
    build = gulp.series(srcClean, demoClean, gulp.parallel(srcStyle, taskScripts, srcCopy, demoCopy, demoStyle, demoImagemin), watchFiles)
}

export default build
