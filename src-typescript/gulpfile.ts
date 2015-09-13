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
