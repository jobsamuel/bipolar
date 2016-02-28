const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync');

gulp.task('default', ['build', 'serve', 'watch']);
gulp.task('build', ['processHTML', 'processJS', 'copy']);

gulp.task('watch', () => {
  gulp.watch('src/js/app.js', ['processJS']);
  gulp.watch('src/*.html', ['processHTML']);
});

gulp.task('copy', () => 
  gulp.src('src/assets/**/*')
    .pipe(gulp.dest('build/assets'))
);

gulp.task('processJS', () => 
  gulp.src('src/js/app.js')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
);

gulp.task('processHTML', () =>
  gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
);

gulp.task('serve', () =>
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  })
);