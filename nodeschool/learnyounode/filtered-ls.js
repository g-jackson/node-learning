const fs = require('fs')
let fileDir = process.argv[2]
let fileExt = process.argv[3]

fs.readdir(fileDir, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        const filteredList = data.filter(filename => filename.split('.')[1] === fileExt)
        filteredList.forEach(element => console.log(element));
    } else {
        return console.log(err);
    }
});