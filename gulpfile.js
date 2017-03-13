var gulp = require("gulp");   // require function is used in order to load the gulp package into a gulp variable that can be used in our code. Remember:(Variable name = package name)
var concat = require('gulp-concat');
var browserify = require('browserify');                              //Calling Browserify.
var source = require('vinyl-source-stream');
//vinyl-source-stream is used for putting the browserified source code into a new file.
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');



gulp.task('myTask', function(){    //calling the task method defined in the gulp package to create a task
  console.log('hello gulp');
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/pingpong-interface.js', './js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify',['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});

var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
