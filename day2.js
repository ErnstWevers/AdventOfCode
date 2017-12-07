var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day2.txt');
var inputText = [];

readStream.on('data', function(chunk) {
  inputText+= chunk;
})
readStream.on('end', function() {
  console.log("the sum of the diff: " +sumDiff(prepareArray(inputText)))
  console.log("the sum of even diffs: " +sumDivide(prepareArray(inputText)))
})

function prepareArray(numberInput){
  return numberInput.split("\n").map(row => row.split("\t"))
}

function findDiff(row){
  return (Math.max.apply(null, row) - Math.min.apply(null, row))
}

function sumDiff(array){
  let sum = 0
  array.map( row => { sum += findDiff(row) })
  return sum
}

function sumDivide(array){
  let sum = 0
  array.map( row => {
    // console.log("this row: "+row)
  })
  console.log("weird undefined: " +evenDivide(array[15]))
  // console.log("evenDivide: " + evenDivide(array[15]))
  return sum
}

function evenDivide(row, rowSum = 0){
  var rowSum = rowSum || 0;
  console.log(rowSum)
  console.log(""+row)
  number = row.pop()
  // console.log("the row : "+ row)
  // console.log("the number : "+ number)
  row.map( entry => {
    if(entry%number === 0 || number%entry === 0){
      rowSum = entry > number ? rowSum+(entry/number) : rowSum
      rowSum = number > entry ? rowSum+(number/entry) : rowSum
      rowSum = number === entry ? rowSum+1 : rowSum
    }
  })
  if(row.length > 1){
    evenDivide(row, rowSum)
  } else {
    console.log("final sum : " +rowSum)
    return rowSum
  }
}
