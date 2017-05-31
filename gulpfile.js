var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

gulp.task('default', function() {
    runSequence(
        'semantic'
    );
});

gulp.task('semantic', function() {
    runSequence(
        'semantic-base',
        'semantic-theme'
    );
});

gulp.task('semantic-base', function() {
    gulp.src('public/dist/semantic/semantic.less')
    .pipe(less())
    .pipe(concat('semantic.min.css'))
    .pipe(autoprefixer())
    .pipe(minifyCSS({
        keepSpecialComments: false
    }))
    .pipe(gulp.dest('./web/css/'))
});

gulp.task('style', function() {
    gulp.src('public/sass/base.sass')
    .pipe(sass())
    .pipe(concat('base.min.css'))
    // .pipe(autoprefixer())
    .pipe(minifyCSS({
        keepSpecialComments: false
    }))
    .pipe(gulp.dest('./web/css/'))
});


gulp.task('stream', function() {
    return watch('public/sass/**/*.sass', { ignoreInitial: false })
        .pipe(gulp.dest('./web/css/'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./public/sass/**/*.sass", ['style']).on('change', browserSync.reload);
  gulp.watch("./pages/**/*.html").on('change', browserSync.reload);
});
