var through = require('through2')
var split = require('split')
var oddline = 0

var caseAlternator = through(function(buffer, _, next){
    if(oddline===1){
        this.push(buffer.toString().toUpperCase()+ '\n')
        oddline = 0
    }
    else{
        this.push(buffer.toString().toLowerCase()+ '\n')
        oddline = 1
    }
    next()
})

process.stdin.pipe(split()).pipe(caseAlternator).pipe(process.stdout)
