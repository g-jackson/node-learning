var http = require('http');
let path = process.argv[2]

http.get(path, function (response) {
    var body = '';        
    response.setEncoding('utf8')
    response.on('data', function(d) {
        body += d;
    });
    response.on('error', console.error)
    response.on('end', function(){
        console.log(body.length)
        console.log(body)
    })
}).on('error', console.error)