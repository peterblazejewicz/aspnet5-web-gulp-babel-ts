/// <binding Clean="clean" />
/// <reference path="./typings/tsd.d.ts"/>
/// <reference path="./tempTypings/gulp-cssmin.d.ts"/>
/// <reference path="./tempTypings/gulp-main-bower-files.d.ts"/>
/// <reference path="./tempTypings/project.json.d.ts"/>
"use strict";
import gulp = require("gulp");
import rimraf = require("rimraf");
import concat = require("gulp-concat");
import cssmin = require("gulp-cssmin");
import uglify = require("gulp-uglify");
var project = require("./project.json");
import mainBowerFiles = require("gulp-main-bower-files");

var webroot:string = "./" + project.webroot + "/";
var paths:any = {
  js: webroot + "js/**/*.js",
  minJs: webroot + "js/**/*.min.js",
  css: webroot + "css/**/*.css",
  minCss: webroot + "css/**/*.min.css",
  concatJsDest: webroot + "js/site.min.js",
  concatCssDest: webroot + "css/site.min.css",
  lib: webroot + "lib/"
};

gulp.task("clean:js", (cb) => {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", (cb) => {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:lib", (cb) => {
  rimraf(paths.lib, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", () => {
  gulp.src([paths.js, "!" + paths.minJs], {
      base: ".",
    })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", () => {
  gulp.src([paths.css, "!" + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("bower", ["clean:lib"], () => {
  return gulp.src("./bower.json")
    .pipe(mainBowerFiles())
    .pipe(gulp.dest(paths.lib));
});
