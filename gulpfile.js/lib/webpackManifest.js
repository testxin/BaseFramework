var path = require('path')
var fs = require('fs') //文件操作

module.exports = function (publicPath, dest, filename) {
    filename = filename || 'rev-manifest.json'

    return function () {
        this.plugin("done", function (stats) {
            var stats = stats.toJson()
            var chunks = stats.assetsByChunkName
            var manifest = {}
            console.log('chunks======='+JSON.stringify(chunks));
            for (var key in chunks) {
                var originalFilename = key + '.js'
                console.log('key======='+key);

                manifest[path.join(publicPath, originalFilename)] = path.join(publicPath, chunks[key].toString())
            }
            console.log('manifest======='+JSON.stringify(manifest));

            fs.writeFileSync(
                path.join(process.cwd(), dest, filename),
                JSON.stringify(manifest)
            )
        })
    }
}
