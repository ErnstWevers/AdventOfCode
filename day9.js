var fs = require('fs'),
    testing = false,
    readStream = testing? fs.createReadStream('./dataInput/testData.txt') : fs.createReadStream('./dataInput/day9.txt'),
    input = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(cleanUp(input))
});

function cleanUp(input){
  return removeTrash(removeIgnore(input.split(''))).join('')
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
    if(input[i] === '<'){
      let trashy = 1
      while(input[i+trashy] !== '>'){ trashy++ }
      input.splice(i,trashy+1)
      i--
    }
    if(input[i]==='\,'){
      input.splice(i,1)
      i--
    }
  }
  return input
}