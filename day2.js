var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day2.txt');
var inputText = [];

readStream.on('data', function(chunk) {
  inputText+= chunk;
});

readStream.on('end', function() {
  console.log("the sum of the diff: " +sumDiff(prepareArray(inputText)));
  console.log("the sum of even diffs: " +sumDivide(prepareArray(inputText)));
});

function prepareArray(numberInput){
  return numberInput.split("\n").map(row => row.split("\t").map(number => parseInt(number)));
}

function findDiff(row){
  return (Math.max.apply(null, row) - Math.min.apply(null, row));
}

function sumDiff(array){
  let sum = 0;
  array.map( row => { sum += findDiff(row);});
  return sum;
}

function sumDivide(array){
  let sum = 0;
  array.map( row => {
    sum += evenDivide(row);
  });
  return sum;
}

function evenDivide(row, rowSum = 0){
  rowSum = rowSum || 0;
  let number = row.pop();
  row.map( entry => {
    if(entry%number === 0 || number%entry === 0){
      rowSum = (entry < number) ? rowSum+(number/entry) : rowSum+(entry/number);
    }
  });
  if(row.length > 1){
    return evenDivide(row, rowSum);
  } else {
    return rowSum;
  }
}
