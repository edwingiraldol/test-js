const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', () =>
  gulp.src(['./libraries/scss/*.scss'])
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./libraries/css'))

    );


gulp.task('default', function(){
    gulp.watch('./libraries/scss/*.scss', gulp.series('sass'));
});