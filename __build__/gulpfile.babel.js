import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import path from 'path';
import csso from 'gulp-csso';
import gulpif from 'gulp-if';
import alisa from 'gulp-wechat-weapp-src-alisa';
import uglify from 'gulp-uglify-es';
import print from 'gulp-print';
import changed from 'gulp-changed';
import ts from 'gulp-typescript';

// 匹配文件路径
const paths = {
    sassPath: ['../src/**/*.scss', '../src/**/*.wxss'],
    tsPath: ['../src/**/*.ts'],
    copy: ['../src/**/*.wxml', '../src/**/*.json', '../src/**/*.wxs'],
};

const DEST = '../dist';

function _join(dirname) {
    return path.join(__dirname, '../src', dirname);
}

const uglifyOpts = {
    // mangle: false,
    compress: {
        drop_console: true,
    },
};

// 路径别名配置
const alisaConfig = {
    'Style': _join('style'),
    'WXS': _join('/packages/wxs'),
    'Mixins': _join('/packages/mixins'),
};

const styles = () => gulp.src(paths.sassPath, {
        base: '../src/',
    })
    .pipe(changed(DEST, {
        extension: '.wxss',
    }))
    .pipe(print(filepath => `Build Scss: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(sass())
    .pipe(gulpif(process.env.NODE_ENV === 'production', csso({
        comments: false,
    })))
    .pipe(rename({
        extname: '.wxss',
    }))
    .pipe(gulp.dest(DEST));

const scripts = () => gulp.src(paths.tsPath)
    .pipe(changed(DEST))
    .pipe(print(filepath => `Build Js: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(ts())
    .pipe(gulpif(process.env.NODE_ENV === 'production', uglify(uglifyOpts)))
    .pipe(gulp.dest(DEST));


const copy = () => gulp.src(paths.copy)
    .pipe(changed(DEST))
    .pipe(print(filepath => `Copy File: ${filepath}`))
    .pipe(alisa(alisaConfig))
    .pipe(gulp.dest(DEST));

const clean = () => del([DEST], {
    force: true,
});

function watchFiles() {
    gulp.watch(paths.copy, copy);
    gulp.watch(paths.sassPath, styles);
    gulp.watch(paths.tsPath, scripts);

    console.log('\r\nStart watch file...\r\n');
    // cb();
}

let build;
if (process.env.NODE_ENV === 'production') {
    build = gulp.series(clean, gulp.parallel(styles, scripts, copy));
} else {
    build = gulp.series(clean, gulp.parallel(styles, scripts, copy), watchFiles);
}

export default build;