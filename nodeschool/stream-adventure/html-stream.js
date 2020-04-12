var trumpet = require('trumpet');
var fs = require('fs');
var through = require('through2')

var tr = trumpet();

var uppercaser = through(function(buffer, _, next){
    this.push(buffer.toString().toUpperCase())
    next()
})

var stream = tr.select('.loud').createStream();

stream.pipe(uppercaser).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)