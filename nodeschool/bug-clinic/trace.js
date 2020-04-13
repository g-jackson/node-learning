var jstrace = require('jstrace')
var createServer = require("http").createServer

createServer(function (req, res) {
    jstrace('request:start', {url: req.url})

    var status
    var body
    if (req.url === '/prognosis' && req.method === 'GET'){
        status = 200
        body = {ok: true}
    }else {
        status = 404
        body = {error: 'notfound'}
    }

    res.setHeader('content-type', 'application/json')
    res.writeHead(status)
    res.end(JSON.stringify(body))
    jstrace('request:end', {statusCode: status, body: body})
}).listen(9999, function () {
    //console.log("listening")
    console.error("up")
})

