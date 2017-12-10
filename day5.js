var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day5.txt');
var input = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  // console.log(checkAll(prepareArray(input)))
  console.log(takeSteps(prepareArray(input)))
  console.log(takeDifferentSteps(prepareArray(input)))
});

function prepareArray(input){
  return input.split("\n").map(number => parseInt(number))
}

function takeSteps(steps){
  var numberOfSteps = 0,
      currentPos = 0,
      stepSize = 0;

  //terminate when currentPos > length
  while(currentPos<steps.length || currentPos < 0){
    stepSize = steps[currentPos]
    steps[currentPos]++
    currentPos += stepSize
    numberOfSteps++
  }

  return numberOfSteps
}

function takeDifferentSteps(steps){
  var numberOfSteps = 0,
      currentPos = 0,
      stepSize = 0;

  //terminate when currentPos > length
  while(currentPos<steps.length || currentPos < 0){
    stepSize = steps[currentPos]
    steps[currentPos] = steps[currentPos] < 3 ? steps[currentPos]+1 : steps[currentPos]-1
    currentPos += stepSize
    numberOfSteps++
  }

  return numberOfSteps
}