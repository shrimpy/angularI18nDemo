'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');

gulp.task('js', function(){
  return gulp.src([
    './bower_components/angular/angular.js',
    './bower_components/angular-translate/angular-translate.js',
    './bower_components/angular-translate/angular-translate.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',


    './js/app.js'])
    .pipe(concat('app.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('i18nJson', function(){
  return gulp.src([
    './lang/*.json'
  ])
  .pipe(gulp.dest('./lang'));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('build', [], function() {
  runSequence('js', 'i18nJson');
});

gulp.task('default', ['build'], function() {});

