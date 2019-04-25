const {
    src,
    dest,
    parallel,
    watch,
    series
} = require('gulp');
const Sass = require('gulp-sass');
const Rename = require('gulp-rename');
const Path = require('path');
const Csso = require('gulp-csso');
const Clean = require('gulp-clean');
const GulpIf = require('gulp-if');
const Alias = require('gulp-wechat-weapp-src-alisa');
const Uglify = require('gulp-uglify-es').default;
const Print = require('gulp-print').default;
const Changed = require('gulp-changed');
const TS = require('gulp-typescript');
// const Babel = require('gulp-babel');

// 匹配文件路径
const path = {
    sassPath: ['../src/**/*.scss'],
    tsPath: ['../src/**/*.ts'],
    copy: ['../src/**/*.wxml', '../src/**/*.json', '../src/**/*.wxs'],
    wxssPath: '../src/**/*.wxss',
};

const DEST = '../dist';

function _join(dirname) {
    return Path.join(__dirname, '../src', dirname);
}

console.log(_join('style'));
const uglifyOpts = {
    // mangle: false,
    compress: {
        drop_console: true,
    },
};

// 路径别名配置
const aliasConfig = {
    'Style': _join('style'),
    'WXS': _join('/packages/wxs'),
};

function sass() {
    return src(path.sassPath, {
            base: '../src/'
        })
        .pipe(Changed(DEST, {
            extension: '.wxss',
        }))
        .pipe(Print(filepath => `Build Scss: ${filepath}`))
        .pipe(Alias(aliasConfig))
        .pipe(Sass())
        .pipe(GulpIf(process.env.NODE_ENV === 'production', Csso({
            comments: false,
        })))
        .pipe(Rename({
            extname: '.wxss',
        }))
        .pipe(dest(DEST));
}

function wxss() {
    return src(path.wxssPath)
        .pipe(Changed(DEST))
        .pipe(Print(filepath => `Build Wxss: ${filepath}`))
        .pipe(Alias(aliasConfig))
        .pipe(GulpIf(process.env.NODE_ENV === 'production', Csso({
            comments: false,
        })))
        .pipe(dest(DEST));
}

function ts() {
    return src(path.tsPath)
        .pipe(Changed(DEST))
        .pipe(Print(filepath => `Build Js: ${filepath}`))
        .pipe(Alias(aliasConfig))
        .pipe(TS())
        .pipe(GulpIf(process.env.NODE_ENV === 'production', Uglify(uglifyOpts)))
        .pipe(dest(DEST));
}

function copy() {
    return src(path.copy)
        .pipe(Changed(DEST))
        .pipe(Print(filepath => `Copy File: ${filepath}`))
        .pipe(Alias(aliasConfig))
        .pipe(dest(DEST));
}


function clean() {
    return src(['../dist/*'], {
            read: false
        })
        .pipe(Clean({
            force: true
        }));
}



function devbuild(cb) {

    watch(path.copy, copy);
    watch(path.sassPath, sass);
    watch(path.wxssPath, wxss);
    watch(path.tsPath, ts);

    console.log('\r\nStart watch file...\r\n');
    cb();
}

if (process.env.NODE_ENV === 'production') {
    exports.build = series(clean, parallel(sass, ts, copy), wxss);
} else {
    exports.build = series(clean, parallel(sass, wxss, ts, copy), devbuild);
}

// exports.default = series(clean, parallel(less, wxss, ts, images, copy));