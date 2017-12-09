const targetSquare = 347991;

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
  console.log("something: " + fromCor)
  middleSq = (colStep + 1)
  rowStep = middleSq < fromCor ? fromCor - middleSq : middleSq - fromCor
  return(colStep + rowStep - 1)
}

// console.log(findSteps())

function populateSpiral(n){
  spiral = [{'x': 0, 'y' : 0, 'v':1}]
  //array of arrays of the form [x, y, value]
  //spiral follows the form: n right, n up, n+1 left, n+1 down, repeat
  //value is mapped to the array

  for(let i = 1 ; i < 4 ; i+=2){
    //move right
    for(let a = 0 ; a < i ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.x++
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    //move up
    for(let a = 0 ; a < i ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.y++
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    //move left
    for(let a = 0 ; a < i+1 ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.x--
      spiral.push(nextBlock)
      populateValue(spiral)
    }
    //move down
    for(let a = 0 ; a < i+1 ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.y--
      spiral.push(nextBlock)
      populateValue(spiral)
    }
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

console.log(populateSpiral())
