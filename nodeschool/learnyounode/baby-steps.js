let sumArray = process.argv.splice(2)

console.log(sumArray.reduce((sum, item) => sum + Number(item), 0))