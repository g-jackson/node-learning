var http = require('http');
var fs = require('fs');
var through = require('through2')

var uppercaser = through(function(buffer, _, next){
    this.push(buffer.toString().toUpperCase())
    next()
})

var server = http.createServer(function (req, res) {
    req.pipe(uppercaser).pipe(res)
})

server.listen(process.argv[2]);
