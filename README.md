# ASP.NET 5 Web Application (basic) with Gulp script in ES5, ES6 (Babel) and TypeScript

A web application templates from `generator-aspnet` with Gulp tasks written in TypeSript and ES6 via Babel

## Running

The project are created and authored with `beta7` version of ASP.NET 5 tooling. The originally scaffolded content is based on `generator-aspnet` `Web Application Basic` web application template.

To run each example just invoke from example directory:
```
dnu restore

dnu build

dnx kestrel
```

### Changes in implementation

Compared to original content:

- updated client dependencies to most recent ones
- updated NPM dependencies to most recent one
- optimized dependencies management via Gulp task
- event based scripting in `project.json`

### Gulp files

#### `gulpfile.js` original ES5 implementation

```JavaScript
/// <binding Clean='clean' />
'use strict';
/* jshint node: true */
var gulp = require("gulp"),
  rimraf = require("rimraf"),
  concat = require("gulp-concat"),
  cssmin = require("gulp-cssmin"),
  uglify = require("gulp-uglify"),
  project = require("./project.json"),
  mainBowerFiles = require("gulp-main-bower-files");

var paths = {
  webroot: "./" + project.webroot + "/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.lib = paths.webroot + "lib/";

gulp.task("clean:js", function(cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function(cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:lib", function(cb) {
  rimraf(paths.lib, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function() {
  gulp.src([paths.js, "!" + paths.minJs], {
      base: "."
    })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", function() {
  gulp.src([paths.css, "!" + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("bower", ["clean:lib"], function() {
  return gulp.src("./bower.json")
    .pipe(mainBowerFiles())
    .pipe(gulp.dest(paths.lib));
});
```

#### `gulpfile.babel.js` ES6 version via Babel

The `package.json` `devDependencies` section requires `babel-core` as dependency to work with Gulp:
```
"babel-core": "^5.8.24",
```

```
/// <binding Clean='clean' />
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
```

#### `gulpfile.ts` TypeScript version

This version is still WIP (work in progress).

The project needs some modification before `gulpfile.ts` can be executed successfully.

The first important change is to update `package.json` dependencies:
```
"typescript": "^1.5.3",
"typescript-node": "^0.1.2",
"typescript-register": "^1.1.0",
"typescript-require": "^0.2.9"
```

The project uses type definitions, so it assumes that you have `tsd` tool installed globally:
```
npm install -g tsd
```

The restore script invokes:
```
npm install
bower install
tsd install
```

TBD


### Author

@blazejewicz
