var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day8.txt'),
    input = [],
    tower = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(parseInput(input))
  // parseInput(input)
});

function parseInput(input){
  //parses the input and returns a sorted collection of parent/child relationships
  let parsed =  input.split('\n').map(row => row.split(' if ')).map(entry => entry[0].split(' ').concat(entry[1]))
  simplifyToAdd(parsed)
  return extractSecond(parsed)
}

function simplifyToAdd(input){
  //fixes stupid input form for increase and decrease
  return input.map(row => {
    if(row[1] === 'dec') {row[2] = -row[2]}
    row.splice(1,1)
    return row
  })
}

function extractSecond(input){
  return input.map(row => {
    let second = row[2].split(' ')[0]
    return row.concat(second)
  })
  return input
}

function evaluateEntry(entry){
  //check whether both entries exist
}

function checkExist(register){

}