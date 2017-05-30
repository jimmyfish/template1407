var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

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
    gulp.dest('public/dist/semantic/semantic.less')
    .pipe(less())
    .pipe(concat(./web/css/semantic.min.css))
    .pipe(autoprefixer())
    .pipe(minifyCSS({
        keepSpecialComments: false
    }))
});


gulp.task('stream', function() {
    return watch('public/sass/**/*.sass', { ignoreInitial: false })
        .pipe(gulp.dest('./web/css/'))
});
