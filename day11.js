var testing = false,
    fs = require('fs'),
    readStream = testing ? fs.createReadStream('./dataInput/testData.txt') : fs.createReadStream('./dataInput/day11.txt'),
    input = [],
    transpose = {
      n:   [ 0, 2],
      ne:  [ 1, 1],
      se:  [ 1,-1],
      s:   [ 0,-2],
      sw:  [-1,-1],
      nw:  [-1, 1],
    },
    position = [0,0];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  traceSteps(cleanUp(input))
  console.log(position)
  console.log(findSteps(position))
});

function cleanUp(input){
  return input.split(',')
}

function traceSteps(input){
  var maxDis = 0;
  input.map(step =>{
    let coordsTrans = transpose[step]
    position[0]+=coordsTrans[0]
    position[1]+=coordsTrans[1]
    maxDis = findSteps(position) > maxDis ? findSteps(position) : maxDis
  })
  console.log("Largest number of steps away is: " + maxDis)
}

function findSteps(position){
  position = position.map(coord => Math.abs(coord))
  let diagonal = Math.min.apply(null, position)
  position = position.map(coord => coord - diagonal)
  let straight = Math.max.apply(null,position)/2 || 0
  return (diagonal + straight)
}