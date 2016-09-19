'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var imageop = require('gulp-image-optimization');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer')
var del = require('del')

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
  gulp.watch('src/styles/**/*.styl', ['debug:css']);
  gulp.watch('src/javascript/**/*.js', ['debug:javascript'])
  gulp.watch('src/*.html', ['debug:html']);
});

gulp.task('debug:javascript', function () {
  gulp
    .src([
      'src/javascript/jquery.js',
      'src/javascript/z-hamburguer.js',
      'src/javascript/z-index.js',
      'src/javascript/slick.min.js',
      'src/javascript/z-carousel.js'
    ])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('build/javascript'))

  gulp
    .src([
      'src/javascript/jquery.js',
      'src/z-modal.js'
    ])
    .pipe(concat('metodos.js'))
    .pipe(gulp.dest('build/javascript'))
});

gulp.task('debug:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(gulp.dest('build/images'))

  gulp
    .src('src/styles/ajax-loader.gif')
    .pipe(gulp.dest('build/css/'))
});

gulp.task('debug:css', function () {
  gulp
    .src('src/styles/*.styl')
    .pipe(stylus({
      compress: false,
      'include css': true
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('debug:html', function () {
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

/*!
 * Production tasks
 */

gulp.task('dist:javascript', function () {
  gulp
    .src([
      'src/javascript/jquery.js',
      'src/javascript/z-hamburguer.js',
      'src/javascript/z-index.js',
      'src/javascript/slick.min.js',
      'src/javascript/z-carousel.js'
    ])
    .pipe(concat('index.js'))
    .concat(uglify())
    .pipe(gulp.dest('build/javascript'))

  gulp
    .src(['src/javascript/jquery.js', 'src/z-modal.js'])
    .pipe(concat('metodos.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/javascript'))
});

gulp.task('dist:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('build/images'));
});

gulp.task('dist:css', function () {
  gulp
    .src('src/styles/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true,
      user: [autoprefixer()]
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('dist:html', function () {
  gulp.src('src/*.html')
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
  gulp
    .src([
      'src/javascript/jquery.js',
      'src/javascript/z-hamburguer.js',
      'src/javascript/z-index.js',
      'src/javascript/slick.min.js',
      'src/javascript/z-carousel.js'
    ])
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/javascript'))

  gulp
    .src(['src/javascript/jquery.js', 'src/z-modal.js'])
    .pipe(concat('metodos.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/javascript'))
});

gulp.task('gh:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('docs/images'));
});

gulp.task('gh:css', function () {
  gulp
    .src('src/styles/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true,
      user: [autoprefixer()]
    }))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('gh:html', function () {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('default', ['server', 'debug:javascript', 'debug:css', 'debug:html', 'debug:images', 'watch']);
gulp.task('github', ['gh:javascript', 'gh:images', 'gh:css', 'gh:html'])
gulp.task('build', ['dist:javascript', 'dist:css', 'dist:html', 'dist:images', 'clean']);
