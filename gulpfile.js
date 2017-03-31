const gulp = require('gulp');
const browserSync = require('browser-sync')
  .create(); // create a browser sync instance.

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: '.'
    },
    port: process.env.PORT || 3000,
  });
});

gulp.task('watch', () => {
  gulp.watch('*.html')
    .on('change', browserSync.reload);
  gulp.watch('public/js/*.js')
    .on('change', browserSync.reload);
  gulp.watch('jasmine/**/*.js')
    .on('change', browserSync.reload);
  gulp.watch('public/css/*.css')
    .on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'browser-sync']);
