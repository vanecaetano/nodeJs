var gulp = require('gulp');
var jsFiles = ['*.js', 'src/**/*.js'];
var jshint = require('gulp-jshint');

gulp.task('style', function(){
    gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
        verbose:true
    }));
})