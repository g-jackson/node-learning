const express = require('express')
const path = require('path')
const app = express()
const bodyparser = require('body-parser')
const crypto = require('crypto')



app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname, 'public/')))

// app.use(require('stylus').middleware(process.argv[3]))
// app.use(express.static(process.argv[3]))

app.use(bodyparser.urlencoded({extended: false}))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates'))

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})

app.post('/form', function(req, res){
    res.send(req.body.str.split("").reverse().join(""))
})

app.put('/message/:id', function(req, res){
    var id = req.params.id
    var hash = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
    res.send(hash)
})

app.get('/search', function(req, res){
    console.log(req.query)
    res.send(req.query)
})


app.listen(process.argv[2])
