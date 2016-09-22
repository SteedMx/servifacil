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
    .src('./public')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true,
      directoryListing: {
        enabled: true,
        path: 'public'
      }
    }));
});

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.*', ['debug:css']);
  gulp.watch('src/javascript/**/*.*', ['debug:javascript'])
  gulp.watch('src/*.*', ['debug:html']);
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
    .pipe(gulp.dest('public/javascript'))

  gulp
    .src([
      'src/javascript/jquery.js',
      'src/javascript/z-modal.js'
    ])
    .pipe(concat('metodos.js'))
    .pipe(gulp.dest('public/javascript'))
});

gulp.task('debug:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(gulp.dest('public/images'))

  gulp
    .src('src/styles/ajax-loader.gif')
    .pipe(gulp.dest('public/css/'))
});

gulp.task('debug:css', function () {
  gulp
    .src('src/styles/*.styl')
    .pipe(stylus({
      compress: false,
      'include css': true
    }))
    .pipe(gulp.dest('public/css'))

  gulp
    .src('src/styles/fonts/**/*.*')
    .pipe(gulp.dest('public/css/fonts'))
});

gulp.task('debug:html', function () {
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'))
})


gulp.task('debug:fonts', function () {
    gulp
      .src('src/fonts/**/*.*')
      .pipe(gulp.dest('public/fonts/'))
})

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
    .pipe(uglify())
    .pipe(gulp.dest('public/javascript'))

  gulp
    .src([
      'src/javascript/jquery.js',
      'src/javascript/z-modal.js'
    ])
    .pipe(concat('metodos.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascript'))
});

gulp.task('dist:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('public/images/'));
});

gulp.task('dist:css', function () {
  gulp
    .src('src/styles/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true,
      user: [autoprefixer()]
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('dist:html', function () {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('dist:fonts', function () {
    gulp
      .src('src/fonts/**/*.*')
      .pipe(gulp.dest('public/fonts/'))
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
    .pipe(gulp.dest('docs/javascript'))

  gulp
    .src([
      'src/javascript/jquery.js',
      'src/javascript/z-modal.js'
    ])
    .pipe(concat('metodos.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docs/javascript'))
});

gulp.task('gh:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('docs/images'))
})

gulp.task('gh:css', function () {
  gulp
    .src('src/styles/*.styl')
    .pipe(stylus({
      compress: true,
      'include css': true,
      user: [autoprefixer()]
    }))
    .pipe(gulp.dest('docs/css'))
})

gulp.task('gh:html', function () {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('docs'))
})

gulp.task('gh:fonts', function () {
    gulp
      .src('src/fonts/**/*.*')
      .pipe(gulp.dest('docs/fonts/'))
})

gulp.task('default', ['server', 'debug:javascript', 'debug:css', 'debug:html', 'debug:images', 'debug:fonts', 'watch'])
gulp.task('github', ['gh:javascript', 'gh:images', 'gh:css', 'gh:html', 'gh:fonts'])
gulp.task('build', ['dist:javascript', 'dist:css', 'dist:html', 'dist:images', 'dist:fonts'])
