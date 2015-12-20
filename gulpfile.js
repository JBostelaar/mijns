var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    include = require('gulp-include'),
    connect = require('gulp-connect'),
    fileinclude = require('gulp-file-include');

// Sass
gulp.task('sass', function () {
    return sass('dev/sass/style.sass', {noCache: true})
        .pipe(gulp.dest('public/assets/css/'));
});

// JS
gulp.task('js', function () {
    //Custom JS
    gulp.src('dev/js/custom.js')
        .pipe(include())
    .pipe(uglify())
    .pipe(concat("app.min.js"))
        .pipe(gulp.dest('public/assets/js/'));

    //Vendor JS
    gulp.src('dev/js/libs/vendor.js')
        .pipe(include())
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest('public/assets/js/'));
});

// Watch js, sass & html
gulp.task('watch', function () {
    gulp.watch('dev/js/**/*.js', ["js"]);
    gulp.watch('dev/sass/**/*.sass', ["sass"]);
    gulp.watch('dev/html/**/*.html', ["fileinclude"]);
});

// Include html files
gulp.task('fileinclude', function () {
    gulp.src(['dev/html/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./public/'));
});

// Start server
gulp.task('connect', function () {
    connect.server({
        port: 7745,
        root: './public/'
    });
});

// Assests to public
gulp.task('assets', function () {
    gulp.src('./dev/images/*')
        .pipe(gulp.dest('./public/assets/images/'));
    gulp.src('./dev/fonts/*')
        .pipe(gulp.dest('./public/assets/fonts/'));
    gulp.src('./dev/css/*')
        .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('default', ['sass', 'js', 'watch', 'connect', 'fileinclude', 'assets']);