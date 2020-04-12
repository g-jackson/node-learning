var express = require('express');
var app = express();

app.get('/g*', function(req, res) {
    res.send(req.path);
});

app.get('/about', function(req, res) {
    res.send('about')
})

app.get('/', function(req, res) {
    res.send('Hello');
});



app.listen(8000);