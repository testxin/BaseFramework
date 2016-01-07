var config = require('../config')
if (!config.tasks.js) return

var path = require('path')
var webpack = require('webpack')
var webpackManifest = require('./webpackManifest')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules = path.resolve('./', 'node_modules');
var Promise = require('es6-promise').Promise;

var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'react-dom/dist/react-dom.min.js'
];


module.exports = function (env) {
    var jsSrc = path.resolve(config.root.src, config.tasks.js.src)
    var jsDest = path.resolve(config.root.dest, config.tasks.js.dest)
    var publicPath = path.join(config.tasks.js.dest, '/')
    var filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js'
    var extensions = config.tasks.js.extensions.map(function (extension) {
        return '.' + extension
    })

    var webpackConfig = {
        context: jsSrc,
        plugins: [],
        resolve: {
            root: jsSrc,
            alias: [],
            extensions: [''].concat(extensions)
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        comments:false,
                        shouldPrintComment:false,
                        plugins: ['transform-runtime'],
                        presets: ['react', 'es2015']
                    }

                },
                {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'sass']
                }
            ],
            noParse: []
        }
    }

    if (env !== 'test') {
        // Karma doesn't need entry points or output settings
        webpackConfig.entry = config.tasks.js.entries

        /*
         app: [
         'webpack-dev-server/client?http://localhost:8080',
         'webpack/hot/dev-server',
         path.resolve(__dirname, 'src/main.js')
         ],
         react: ['react', 'react-dom'] // 其他库
         */

        webpackConfig.output = {
            path: path.normalize(jsDest),
            filename: filenamePattern,
            publicPath: publicPath
        }


        //if (config.tasks.js.extractSharedJs) {
        // Factor out common dependencies into a shared.js
        /* webpackConfig.plugins.push(
         new webpack.optimize.CommonsChunkPlugin({
         name: 'shared',
         filename: filenamePattern,
         })
         ),*/
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            title: '',
            template: 'src/html/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        }));
        //  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'react.js'))

    }

    if (env === 'development') {
        webpackConfig.devtool = 'source-map'
        webpack.debug = true
    }

    if (env === 'production') {
        webpackConfig.plugins.push(
            new webpackManifest(publicPath, config.root.dest),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.NoErrorsPlugin()
        )
    }

    deps.forEach(function (dep) {
        var depPath = path.resolve(node_modules, dep);

        // console.log('node_modules======='+node_modules);
        //console.log('depPath     ======='+depPath);

        webpackConfig.resolve.alias[dep.split(path.sep)[0]] = depPath;
        webpackConfig.module.noParse.push(depPath);
    });

    return webpackConfig
}
