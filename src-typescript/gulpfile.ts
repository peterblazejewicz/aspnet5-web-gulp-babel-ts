/// <binding Clean='clean' />
/// <reference path="./typings/tsd.d.ts"/>
'use strict';

import gulp = require('gulp');
import rimraf = require('rimraf');
import concat = require('gulp-concat');
import uglify = require('gulp-uglify');

gulp.task('default', () => {
  console.log('hello');
});

gulp.task('bower', () => {
  console.log('bower task');
});

gulp.task('clean', () => {
  console.log('clean task');
});

gulp.task('min', () => {
  console.log('min task');
});
