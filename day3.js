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
  spiral = [{'x': 0, 'y' : 0, 'v':0}]
  //array of arrays of the form [x, y, value]
  //spiral follows the form: n right, n up, n+1 left, n+1 down, repeat
  //value is mapped to the array

  for(let i = 1 ; i < 3 ; i++){
    //move right
    for(let a = 0 ; a < i ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.x++
      spiral.push(nextBlock)
    }
    //move up
    for(let a = 0 ; a < i ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.y++
      spiral.push(nextBlock)
    }
    //move left
    for(let a = 0 ; a <= i ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.x--
      spiral.push(nextBlock)
    }
    //move down
    for(let a = 0 ; a <= i ; a++){
      let nextBlock = Object.assign({},spiral[spiral.length-1])
      nextBlock.y--
      spiral.push(nextBlock)
    }
  }
  return spiral
}

function populateValue(x,y){
  //the value is the sum of the values where x and y don't deviate more than one
}

console.log(populateSpiral())
