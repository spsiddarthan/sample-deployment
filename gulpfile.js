// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
// task
gulp.task('minify-js', function () {
    gulp.src('./*.js') // path to your files
    .pipe(gulp.dest('/output/'));
});
