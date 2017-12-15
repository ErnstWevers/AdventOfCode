var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day7.txt');
var input = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  // console.log(checkAll(prepareArray(input)))
  parseInput(input).map(row => console.log(row))
});

function parseInput(input){
  //should return a collection of objects of the form {name: "abc", weight: "99", parent: "def"}
  return input.split('\n').map(row => row.split(', ')).sort((i,j) => {
    if(i.length > j.length){ return 1}
    if(i.length < j.length){ return -1}
    return 0
  })
}