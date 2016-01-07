"use strict";
// jshint node: true
// jshint esversion: 6
const gulp = require("gulp");
const del = require("del");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const uglify = require("gulp-uglify");
const mainBowerFiles = require("gulp-main-bower-files");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.lib = paths.webroot + "lib/";

gulp.task("clean:js", () => del(paths.concatJsDest));

gulp.task("clean:css", () => del(paths.concatCssDest));

gulp.task("clean:lib", () => del(paths.lib));

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", () => {
    return gulp.src([paths.js, "!" + paths.minJs], {
        base: "."
    })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", () => {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("bower", ["clean:lib"], function () {
    return gulp.src("./bower.json")
        .pipe(mainBowerFiles())
        .pipe(gulp.dest(paths.lib));
});
