/* eslint-disable */
"use strict";

const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const rimraf = require("rimraf");

const plumber = require("gulp-plumber");

const ts = require("gulp-typescript");
const tsc = ts.createProject("./tsconfig.json");

gulp.task("gist", () => {
  return gulp
    .src(["src/gist/**/*.ts", "!src/**/**/*.test.ts"], {
      since: gulp.lastRun('gist')
    })
    .pipe(tsc())
    .pipe(plumber())
    .pipe(gulp.dest("dist/gist"));
});

gulp.task("main", () => {
  return gulp
    .src(["src/main/**/*.ts", "!src/**/**/*.test.ts"], {
      since: gulp.lastRun('main')
    })
    .pipe(tsc())
    .pipe(plumber())
    .pipe(gulp.dest("dist/main"));
});

gulp.task("valueObject", () => {
  return gulp
    .src(["src/valueObject/**/*.ts", "!src/**/**/*.test.ts"], {
      since: gulp.lastRun('valueObject')
    })
    .pipe(tsc())
    .pipe(plumber())
    .pipe(gulp.dest("dist/valueObject"));
});

gulp.task("writer", () => {
  return gulp
    .src(["src/writer/**/*.ts", "!src/**/**/*.test.ts"], {
      since: gulp.lastRun('writer')
    })
    .pipe(tsc())
    .pipe(plumber())
    .pipe(gulp.dest("dist/writer"));
});

gulp.task("nodemon", callback => {
  let started = false;
  return nodemon({
    script: "dist/server/App.js",
    watch: ["dist/**/*.js"],
    ext: "js",
    stdout: true,
    delay: 500,
    env: {
      NODE_ENV: "development"
    }
  })
    .on("start", () => {
      if (!started) {
        callback();
        started = true;
      }
    })
    .on("restart", () => {
      console.log("SERVER RESTARTED");
    });
});

gulp.task("clean", callback => {
  rimraf("dist", callback);
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    "gist",
    "main",
    "valueObject",
    "writer"
  )
);

gulp.task(
  "default",
  gulp.parallel("nodemon", callback => {
    gulp.watch("src/main/**/*.ts", gulp.series("main"));
    gulp.watch("src/gist/**/*.ts", gulp.series("gist"));
    gulp.watch("src/valueObject/**/*.ts", gulp.series("valueObject"));
    gulp.watch("src/writer/**/*.ts", gulp.series("writer"));
    callback();
  })
);
