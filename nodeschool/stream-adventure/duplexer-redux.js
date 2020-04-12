
var duplexer = require('duplexer2')
var through = require('through2').obj

module.exports = function (counter) {
    var counts = {}
    var input_data = through(count_row, end)

    function count_row (row, _, next) {
        if (counts[row.country]){
            counts[row.country] += 1
        }
        else{
            counts[row.country] = 1
        }
        next()
    }

    function end (done) {
        counter.setCounts(counts)
        done()
    }

    return duplexer({ objectMode: true }, input_data, counter)
}