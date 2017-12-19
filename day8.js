var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day8.txt'),
    input = [],
    tower = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(parseInput(input))
});

function parseInput(input){
  //parses the input and returns a sorted collection of parent/child relationships
  return input.split('\n').map(row => row.split(' if '))
}