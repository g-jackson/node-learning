var combine = require('stream-combiner')
var split = require('split')
var through = require('through2').obj
var zlib = require('zlib')

module.exports = function () {
    var lineReader = through(process_line, end)
    
    var current_genre_list
    function process_line (text, _, next) {
        if (text.length === 0){
            return next()
        }
        var line = JSON.parse(text)
        if (line.type === 'genre') {
            if (current_genre_list) {
                this.push(JSON.stringify(current_genre_list) + '\n')
            }
            current_genre_list = { name: line.name, books: [] }
        }
        
        else if (line.type === 'book') {
          current_genre_list.books.push(line.name)
        }    
        next()
    }

    function end (done) {
        if(current_genre_list){
            this.push(JSON.stringify(current_genre_list) + '\n')
        }
        done()
    }

    return combine(
        split(),
        lineReader,
        zlib.createGzip()
    )
}