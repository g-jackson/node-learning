var through = require('through2')

var uppercaser = through(function(buffer, _, next){
    this.push(buffer.toString().toUpperCase())
    next()
})

process.stdin.pipe(uppercaser).pipe(process.stdout)
