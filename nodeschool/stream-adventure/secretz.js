var tar = require('tar')
var crypto = require('crypto')
var concat = require('concat-stream')


var cypherName = process.argv[2]
var passphrase = process.argv[3]
var decrypt_stream = crypto.createDecipher(cypherName, passphrase)

var parser = new tar.Parse()

parser.on('entry', function (e) {
    //console.log(e.type)
    if (e.type === 'File'){
        var hashStream = crypto.createHash('md5', { encoding: 'hex' })
        var printHashAndPath = function (hash) {
            console.log(hash + ' ' + e.path)
        }
        e.pipe(hashStream).pipe(concat(printHashAndPath))
    }
    else{
        return e.resume()
    }
})


process.stdin.pipe(decrypt_stream).pipe(parser)