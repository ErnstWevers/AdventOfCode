var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day8.txt'),
    input = [],
    tower = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(simplifyAdd(parseInput(input)))
  // parseInput(input)
});

function parseInput(input){
  //parses the input and returns a sorted collection of parent/child relationships
  return input.split('\n').map(row => row.split(' if ')).map(entry => entry[0].split(' ').concat(entry[1]))
}

function simplifyAdd(input){
  return input.map(row => {
    if(row[1] === 'dec') {row[2] = -row[2]}
    row.splice(1,1)
    return row
    })
}