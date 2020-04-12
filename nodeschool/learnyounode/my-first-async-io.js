const fs = require('fs')

let filePath = process.argv[2]

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        return console.log(data.split("\n").length -1);
        
    } else {
        return console.log(err);
    }
});