//*********** IMPORTS *****************
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var map = require("map-stream");
var livereload = require("gulp-livereload");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
global.errorMessage = '';
 
//Configuration - Change me

var jsFiles = [
{
watch: ['js/App/globalFunctions.js','js/App/infoModule.js','js/App/ccModule.js'],
output: 'js/',
name: 'global.js',
nameMin: 'global.min.js'
}
];
//END configuration
 
 
gulp.task('watch', function () {
    for (var j in jsFiles) {
        scriptWatch(jsFiles[j]);
    }
});

 
function scriptWatch(jsData) {
gulp.src(jsData.watch)
.pipe(watch(jsData.watch,{emitOnGlob: true}, function() {
gulp.src(jsData.watch)
.pipe(concat(jsData.name))
.pipe(gulp.dest(jsData.output))
.pipe(uglify({outSourceMap: false}))
.pipe(rename(jsData.nameMin))
.pipe(gulp.dest(jsData.output));
}));
}
 
gulp.task('default', ['watch']);
 

