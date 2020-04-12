const fs = require('fs')

module.exports = function filteredLs(fileDir, fileExt, callback){
    fs.readdir(fileDir, function(err,data){
        if (!err) {
            const filteredList = data.filter(filename => filename.split('.')[1] === fileExt)
            return callback(null, filteredList)
        } else {
            return callback(err)
        }
    });
}