var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day6.txt'),
    input = [],
    testInput = [0,2,7,0],
    cycled = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  console.log(cycleDist(prepareArray(input)))
});

console.log(cycleDist(testInput))
console.log(cycled)

function prepareArray(input){
  return input.split("\t").map(number => parseInt(number))
}

function findHigh(array){
  let highNum   = Math.max.apply(null,array)
  return array.indexOf(highNum)
}

function redist(array){
  let i = findHigh(array)
  let target = array[i]
  array[i] = 0
  while(target>0){
    i = (i+1)%array.length
    array[i]++
    target--
  }
  return array
}

function cycleDist(array){
  console.log(array)
  let cycleNum = 0;
  let stop = false
  do {
    cycled.push(array.join(''))
    redist(array)
    stop = cycled.includes(array.join(''))
    cycleNum++
  } while(!stop)
  return cycleNum
}