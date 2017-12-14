var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day6.txt');
var input = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(prepareArray(input))
});

function prepareArray(input){
  return input.split("\t").map(number => parseInt(number))
}