let path = process.argv[2]

var fs = require('fs');
fs.createReadStream(path).pipe(process.stdout);
