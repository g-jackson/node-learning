const express = require('express')
const app = express()
const fs = require('fs')

const filename = process.argv[3]
const port = process.argv[2]

app.get('/books', function(req, res){
    var books
    fs.readFile(filename, function(e, data) {
        books = JSON.parse(data)
    res.json(books)
  })
})

app.listen(port)