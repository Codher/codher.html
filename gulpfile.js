const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect')

gulp.task('styles', () => {
    return gulp.src(['src/assets/stylesheets/**/*.scss'])
            .pipe(sass())
            .on('error', console.log)
            .pipe(gulp.dest('dist/assets/stylesheets'))
            .pipe(connect.reload());
});

gulp.task('html', () => {
  return gulp.src("src/*.html")
          .pipe(gulp.dest('dist/'))
          .pipe(connect.reload());
});

gulp.task('images', () => {
  return gulp.src("src/assets/images/**/*")
              .pipe(gulp.dest('dist/assets/images'))
              .pipe(connect.reload());
})

gulp.task('connect', () => {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8181
  });
});

// Requires gulp >=v3.5.0
gulp.task('watch', () => {
  gulp.watch('src/assets/images/**', ['images']);
  gulp.watch('src/assets/stylesheets/**', ['styles']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('default', ['styles', 'html', 'images', 'connect', 'watch']);
