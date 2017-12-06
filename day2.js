var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day2.txt');
var inputText = [];

readStream.on('data', function(chunk) {
  inputText+= chunk;
})
readStream.on('end', function() {
  console.log(sumDiff(prepareArray(inputText)))
})

function prepareArray(numberInput){
  return numberInput.split("\n").map(row => row.split("\t"))
}

function findDiff(row){
  return (Math.max.apply(null, row) - Math.min.apply(null, row))
}

function sumDiff(array){
  let sum = 0;
  array.map( row => { sum += findDiff(row)} )
  return sum;
}
