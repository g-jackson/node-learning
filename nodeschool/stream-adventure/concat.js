var through = require('through2')
var concat = require('concat-stream')

var logReverseBuffer = function(body){
    console.log(body.toString().split("").reverse().join(""))
}

process.stdin.pipe(concat(logReverseBuffer))