'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var imageop = require('gulp-image-optimization');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

/*!
 * Development tasks
 */

gulp.task('server', function () {
  gulp
    .src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true,
      directoryListing: {
        enabled: true,
        path: 'build'
      }
    }));
});

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.styl', ['css']);
  gulp.watch('src/javascript/**/*.js', ['javascript'])
  gulp.watch('src/index.html', ['html']);
});

gulp.task('debug:javascript', function () {
  gulp.src('src/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/javascript'));
});

gulp.task('debug:images', function () {
  gulp
    .src(['src/images/*.png'])
    .pipe(gulp.dest('build/images'));
});

gulp.task('debug:css', function () {
  gulp
    .src('src/styles/main.styl')
    .pipe(stylus({ compress: false }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('debug:html', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
});

/*!
 * Production tasks
 */

gulp.task('dist:javascript', function () {
  gulp.src('src/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/javascript'));
});

gulp.task('dist:images', function () {
  gulp
    .src(['src/images/*.png'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('build/images'));
});

gulp.task('dist:css', function () {
  gulp
    .src('src/styles/main.styl')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('dist:html', function () {
  gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  del.sync('src')

  gulp
    .src('build/*')
    .pipe(gulp.dest('./'))
})

/*!
 * Github tasks
 */

gulp.task('gh:javascript', function () {
  gulp.src('src/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docs/javascript'));
});

gulp.task('gh:images', function () {
  gulp
    .src(['src/images/*.png'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('docs/images'));
});

gulp.task('gh:css', function () {
  gulp
    .src('src/styles/main.styl')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('gh:html', function () {
  gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('default', ['server', 'debug:javascript', 'debug:css', 'debug:html', 'watch']);
gulp.task('github', ['gh:javascript', 'gh:images', 'gh:css', 'gh:html'])
gulp.task('build', ['dist:javascript', 'dist:css', 'dist:html', 'dist:images', 'clean']);
