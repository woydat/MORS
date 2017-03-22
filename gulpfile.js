var gulp = require('gulp');
var sass = require('gulp-sass');
var gplumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var errorHandler = function() {
    return gplumber(function(error) {
        console.log(error.message);
    })
};

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(errorHandler())
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    return gulp.watch('scss/**/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);