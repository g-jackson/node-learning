module.exports = scenario;
var replify = require('replify')
var createServer = require("http").createServer;

function scenario(callback) {
     var server = createServer(function (req, res) {
        res.end("hello")
    })
    server.__message = 'REPLs are neat'
    var repl = replify({name: 'bug-clinic'}, server)

    callback(server, repl);
}

