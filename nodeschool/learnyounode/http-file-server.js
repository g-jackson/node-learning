const http = require('http')
const fs = require('fs')

let port = process.argv[2]
let file = process.argv[3]

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    fs.createReadStream(file).pipe(response)
}).listen(port)