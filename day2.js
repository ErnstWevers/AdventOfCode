var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day2.txt');
var inputText = [];

readStream.on('data', function(chunk) {
  inputText+= chunk;
})
readStream.on('end', function() {
  console.log(checkSum(prepareArray(inputText)))
})

function prepareArray(numberInput){
  let numberArray = numberInput.split("\t").map(function (number) {
    return parseInt(number,10);
  });

  //very ugly because splitting by line AND tab is weird :(
  table = [];
  for(let i = 0; i < 16; i++){
    tempRow = [];
    for(let j = 0; j < 16; j++){
      tempRow.push(numberArray[i*j+j])
    }
    table.push(tempRow)
  }
  return table;
}

function findDiff(array){
  let min = 9999;
  let max = 0;

  array.map((entry) => {
    min = entry < min ? entry : min
    max = entry > max ? entry : max
  })
  console.log(max-min)
  return (max - min)
}

function checkSum(table){
  let sum = 0;
  console.log(findDiff(table[15]))
  for(let i = 0; i < 16; i++){
    sum += findDiff(table[i])
  }
  return sum;
}
