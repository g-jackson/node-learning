const http = require('http');
const map = require('through2-map')

let port = process.argv[2]

http.createServer(function(request, response) {
    if (request.method !== 'POST'){
        console.log('not post')
        response.writeHead(403, {})
    }else{
        console.log('post')
        response.writeHead(200, {})
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }
}).listen(port);