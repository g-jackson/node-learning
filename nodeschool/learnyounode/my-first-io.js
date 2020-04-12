const fs = require('fs')

let file = process.argv[2]
let textbuff = fs.readFileSync(file, 'utf8')

console.log(textbuff.split('\n').length - 1)
