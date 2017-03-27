const gulp = require('gulp');
const bs = require('browser-sync')
  .create(); // create a browser sync instance.

gulp.task('browser-sync', () => {
  bs.init({
    server: {
      baseDir: '.'
    }
  });
});

gulp.task('watch', () => {
  gulp.watch('*.html')
    .on('change', bs.reload);
  gulp.watch('public/js/*.js')
    .on('change', bs.reload);
  gulp.watch('jasmine/**/*.js')
    .on('change', bs.reload);
  gulp.watch('public/css/*.css')
    .on('change', bs.reload);
});

gulp.task('default', ['watch', 'browser-sync']);
