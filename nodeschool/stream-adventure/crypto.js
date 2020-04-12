var crypto = require('crypto')
var decrypt_stream = crypto.createDecipher('aes256', process.argv[2])
process.stdin.pipe(decrypt_stream).pipe(process.stdout)
