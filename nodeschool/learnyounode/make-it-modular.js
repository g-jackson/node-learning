const mymodule = require('./mymodule')
let fileDir = process.argv[2]
let fileExt = process.argv[3]

function printLs(err, filteredList){
    if (!err) {
        filteredList.forEach(element => console.log(element));
    } else {
        console.log(err)
    }
}

mymodule(fileDir, fileExt, printLs)
