/// <binding Clean='clean' />
'use strict';
/* jshint node: true */
/* jshint esnext: true */
import gulp from 'gulp';
import rimraf from 'rimraf';
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';
import uglify from 'gulp-uglify';
import project from './project.json';
import mainBowerFiles from 'gulp-main-bower-files';

const webroot = `./${project.webroot}/`;
const paths = {
  js: `${webroot}js/**/*.js`,
  minJs: `${webroot}js/**/*.min.js`,
  css: `${webroot}css/**/*.css`,
  minCss: `${webroot}css/**/*.min.css`,
  concatJsDest: `${webroot}js/site.min.js`,
  concatCssDest: `${webroot}css/site.min.css`,
  lib: `${webroot}lib/`,
};

gulp.task('clean:js', (cb) => {
  rimraf(paths.concatJsDest, cb);
});

gulp.task('clean:css', (cb) => {
  rimraf(paths.concatCssDest, cb);
});

gulp.task('clean:lib', (cb) => {
  rimraf(paths.lib, cb);
});

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('min:js', () => {
  gulp.src([paths.js, '!' + paths.minJs], {
      base: '.',
    })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('min:css', () => {
  gulp.src([paths.css, '!' + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest('.'));
});

gulp.task('min', ['min:js', 'min:css']);

gulp.task('bower', ['clean:lib'], () => {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulp.dest(paths.lib));
});
