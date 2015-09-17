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

var paths = {
  webroot: string;
  concactJsDest: string;
  concatCssDest: string;
  css: string,
  js: string,
  lib: string,
  minCss: string,
  minJs: string
} = {
  webroot: "./" + project.webroot + "/",
  concatCssDest:  paths.webroot + "css/site.min.css",
  concatJsDest: paths.webroot + "js/site.min.js",
  css: paths.webroot + "css/**/*.css",
  js: paths.webroot + "js/**/*.js",
  lib: paths.webroot + "lib/",
  minCss: paths.webroot + "css/**/*.min.css",
  minJs: paths.webroot + "js/**/*.min.js"
};

gulp.task("default", () => {
  console.log("hello");
});

gulp.task("bower", () => {
  console.log("bower task");
});

gulp.task("clean", () => {
  console.log("clean task");
});

gulp.task("min", () => {
  console.log("min task");
});
