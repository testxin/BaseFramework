var config = require('../config')
var gulp = require('gulp')
var path = require('path')
var watch = require('gulp-watch')
var webpack = require('webpack')
var webpackConfig = require('../lib/webpack-multi-config')
var browserSync = require('browser-sync')
var logger = require('../lib/compileLogger')
var watchTask = function () {
    var watchableTasks = ['fonts', 'iconFont', 'images', 'html', 'css']

    watchableTasks.forEach(function (taskName) {
        var task = config.tasks[taskName]
        if (task) {
            var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
            watch(glob, function () {
                if (taskName != 'html') {
                    require('./' + taskName)()
                } else {
                    var initialCompile = false
                    webpack(webpackConfig('development')).run(function (err, stats) {
                        logger(err, stats)
                        browserSync.reload()
                        // On the initial compile, let gulp know the task is done
                        if (!initialCompile) {
                            initialCompile = true;
                            require('./htmlmin')()
                        }

                    })
                }
            })
        }
    })
}


gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask
