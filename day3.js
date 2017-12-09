const targetSquare = 265149;

function findOuterSquare(n){
  let x = box = 0;
  while(n > box**2){
    x++
    box = (2*x+1)
  }
  return box
}

function findRemain(n){
  return n - (findOuterSquare(n))**2
}

function findFromCorner(n){
  return -(findRemain(n)%(findOuterSquare(n)-1))
}

function findSteps(n){
  colStep = (findOuterSquare(n)-1)/2
  fromCor = findFromCorner(n)
  middleSq = (colStep + 1)
  rowStep = middleSq < fromCor ? fromCor - middleSq : middleSq - fromCor
  return(colStep + rowStep - 1)
}

function populateSpiral(n){
  spiral = [{'x': 0, 'y' : 0, 'v':1}]
  //array of arrays of the form [x, y, value]
  //spiral follows the form: n right, n up, n+1 left, n+1 down, repeat
  //value is mapped to the array

  var size = 1
  while(spiral[spiral.length-1].v < n){
    //move right
    for(let a = 0 ; a < size ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.x++
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    //move up
    for(let a = 0 ; a < size ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.y++
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    //move left
    for(let a = 0 ; a < size+1 ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.x--
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    //move down
    for(let a = 0 ; a < size+1 ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.y--
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    size += 2
  }
  return spiral
}

function populateValue(spiral){
  //the value is the sum of the values where x and y don't deviate more than one
  let target = spiral[spiral.length-1]
  let value = 0
  spiral.map( square => {
    if(Math.abs(target.x - square.x) === 1 && target.y === square.y){
      value += square.v
    }
    if(Math.abs(target.y - square.y) === 1 && target.x === square.x){
      value += square.v
    }
    if(Math.abs(target.x - square.x) === 1 && Math.abs(target.y - square.y) === 1){
      value += square.v
    }
    target.v = value
  })
}

function grabFirstBig(n){
  var i = 0;
  spiral = populateSpiral(n)
  while( spiral[i].v < n ){ i++ }
  return spiral[i].v
}

console.log(`the number of steps to get to ${targetSquare} is : ` + findSteps(targetSquare))
console.log(`the first number larger than ${targetSquare} is  : ` + grabFirstBig(targetSquare))
