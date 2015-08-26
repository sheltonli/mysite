var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css')

/************************
 * CONFIG
 ***********************/

var config = {
    paths: {
        less: {
            src: "./static/css/app.less",
            dest: "static/css",
        }
    }
};

/************************
 * TASKS
 ***********************/

gulp.task('compile-less', function() {
    return gulp.src(config.paths.less.src)
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest(config.paths.less.dest))
});

/************************
 * WATCH TASKS
 ***********************/

gulp.task('watch-less', function(){
    return gulp.watch('./static/css/*.less', ['compile-less']);
});

/************************
 * DEVELOPMENT SETUP
 ***********************/

gulp.task('default', [
    'compile-less',
    'watch-less'
]);
