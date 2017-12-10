var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day4.txt');
var input = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(checkAll(prepareArray(input)))
});

function prepareArray(input){
  return input.split("\n").map(row => row.split(" "))
}

function checkPhrase(phrase){
  var status = false
  phrase.some((item, index) => {
    status = (phrase.indexOf(item) !== index) || status
  })
  return status
}

function checkAll(input){
  let validNum = 0
  input.map(phrase => {
    validNum = checkPhrase(phrase) ? validNum+1 : validNum
  })
  return input.length-validNum
}