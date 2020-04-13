require('stackup')
var readFile = require("fs").readFile;
var domain = require("domain");

module.exports = scenario

function scenario(path, cb) {
  // create a new domain
  var d = domain.create();

  // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
  d.on("error", cb);

  // use the domain
  d.run(function () {
    readjson(path, cb);
  });
}

function readjson(jsonPath, cb) {
    readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
        cb(error, JSON.parse(contents));
    });
}

//scenario(process.argv[2])