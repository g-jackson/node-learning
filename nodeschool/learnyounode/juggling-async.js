var http = require('http');
let doneCount = 0
let results = ['', '', '']

function httpGet (index){
    http.get(process.argv[2 + index], function (response) {
        var body = '';        
        response.setEncoding('utf8')
        response.on('data', function(d) {
            body += d;
        });
        response.on('error', console.error)
        response.on('end', function(){
            //console.log(body.length)
            doneCount += 1
            results[index] = body
            if (doneCount === 3){
                results.forEach(element => {
                    console.log(element)
                });
            }
        })
    }).on('error', console.error)
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}