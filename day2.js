var fs = require('fs');
var readStream = fs.createReadStream('./dataInput/day2.txt');
var inputText = [];

readStream.on('data', function(chunk) {
  inputText+= chunk;
})
readStream.on('end', function() {
  console.log(sumDiff(prepareArray(inputText)))
  console.log(sumDivide(prepareArray(inputText)))
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
  array.map( row => { sum += evenDivide(row) })
  return sum
}

function evenDivide(row){
  var sum = 0;
  number = row.pop()
  console.log("I am here")
  row.map( entry => {
    if(entry%number === 0 || number%entry === 0){
      console.log(entry +" " + number)
      //switch here
      sum = entry > number ? sum+entry/number : sum
      sum = number > entry ? sum+number/entry : sum
      sum = number === entry ? sum+1 : sum
      console.log(sum)
    }
  })
  if(row.length > 1){
    evenDivide(row)
  }
  return sum
}
