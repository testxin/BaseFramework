var config = require('../config')
if (!config.tasks.html) return

var browserSync = require('browser-sync')
//var data         = require('gulp-data')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin = require('gulp-htmlmin')
var path = require('path')
var del = require('del')
//var render = require('gulp-nunjucks-render')
var fs = require('fs')

//var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
    src: [path.join("./", config.tasks.htmlmin.src, '/*.html')],
    dest: path.join(config.root.dest, config.tasks.html.dest),
}


var htmlTask = function () {
    //render.nunjucks.configure([path.join(config.root.src, config.tasks.html.src)], {watch: false})

    gulp.src(paths.src)
        //.pipe(data(getData))
        .on('error', handleErrors)
        //    .pipe(render())
        //.on('error', handleErrors)
        .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())

    console.log('public ..javascript....paths.src====='+paths.src)
    del(['public/javascript/*.html'], function (err, deletedFiles) {
        console.log('Files  deleted success');
    });

}

gulp.task('htmlmin', htmlTask)


module.exports = htmlTask
