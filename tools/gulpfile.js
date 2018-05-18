const gulp = require("gulp");
const path = require("path");
const less = require("gulp-less");
const rimraf = require("rimraf");

gulp.task("default", () => {
  let src = path.resolve(__dirname, "../src/**/*.less");
  let dist = path.resolve(__dirname, "../dist");

  rimraf.sync(dist);

  gulp
    .src(src)
    .pipe(less())
    .pipe(gulp.dest(dist));
});
