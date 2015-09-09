'use asm';

// Import modules
import runSequence from 'run-sequence';
import del from 'del';
import gulp from 'gulp';
const $ = require('gulp-load-plugins')();
//import util from 'util';

// Define directory paths
const srcDir = './src';
const testDir = './test';
const buildDir = './dist';

gulp.task('clean', del.bind(null, buildDir));

gulp.task('build:json', () => {
    return gulp.src(`${srcDir}/**/*.json`)
        .pipe($.jsonminify())
        .pipe(gulp.dest(buildDir));
});

gulp.task('build:js', () => {
    return gulp.src(`${srcDir}/**/*.js`)
        .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(buildDir));
});

gulp.task('watch', ['default'], () => {
    gulp.watch(`${srcDir}/**/*.js`, ['build:js']);
});

gulp.task('default', cb => {
    runSequence('clean', 'build:json', 'build:js', cb);
});
