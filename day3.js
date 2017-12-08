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

console.log(findSteps(targetSquare))
