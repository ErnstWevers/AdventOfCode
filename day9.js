var testing = true,
    fs = require('fs'),
    readStream = testing ? fs.createReadStream('./dataInput/testData.txt') : fs.createReadStream('./dataInput/day9.txt'),
    input = [],
    groupScore;

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log('I was called with this input : ' + input)
  console.log(cleanUp(input))
});

function cleanUp(input){
  return removeTrash(removeIgnore(input.split('')))
}

function removeIgnore(input){
  for(let i = 0; i < input.length; i++){
    if(input[i] === '!'){
      input.splice(i,2)
      i--
    }
  }
  return input
}

function removeTrash(input){
  for(let i = 0; i < input.length; i++){
    //remove everything between < and >
    if(input[i] === '<'){
      let trashy = 1
      while(input[i+trashy] !== '>'){ trashy++ }
      input.splice(i,trashy+1)
      i--
    }
    //get rid of all the commas
    if(input[i]==='\,'){
      input.splice(i,1)
      i--
    }
  }
  return input
}

function reduceGroup(input){
  let group = input.slice(1,findGroup(input))
  if(group.length > 0){
    reduceGroup(group)
  }
  input.splice(0,findGroup(input)+1)
  return input
}

function findGroup(input){
  let position = 0
  let rightEnd = 1
  while(rightEnd > 0){
    position++
    rightEnd = input[position] === '{' ? rightEnd+1 : rightEnd-1
  }
  return position
}