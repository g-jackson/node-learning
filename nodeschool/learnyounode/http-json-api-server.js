const http = require('http')
const strftime = require('strftime')
const url = require('url')
const queryString = require('querystring')

let port = process.argv[2]

http.createServer(function(request, response) {
    const reqUrl = url.parse(request.url)
    var queryObj = queryString.parse( reqUrl.query )
    var inputTime
    var date
    var json
    if (reqUrl.pathname === '/api/parsetime'){
        inputTime = queryObj.iso
        date = Date.parse(inputTime)
        json = {
            "hour": parseInt(strftime('%H', new Date(date))),
            "minute": parseInt(strftime('%M', new Date(date))),
            "second": parseInt(strftime('%S', new Date(date))),
        }
        response.writeHead(200, {})
        response.write(JSON.stringify(json));

    }else if (reqUrl.pathname === '/api/unixtime'){
        inputTime = queryObj.iso
        date = Date.parse(inputTime)
        json = {
            "unixtime": date
        }
        response.writeHead(200, {})
        response.write(JSON.stringify(json));

    }else {
        response.writeHead(403, {})
        response.write("invalid url")
    }

    response.end()
}).listen(port);