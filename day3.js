const targetSquare = 48;

function findOuterSquare(n){
  let x = box = 1;
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
  return -(findRemain(n)%(findOuterSquare(n)))
}

function findSteps(n){
  colStep = (findOuterSquare(n)-1)/2
  fromCor = findFromCorner(n)
  middleSq = (colStep + 1)
  rowStep = middleSq < fromCor ? fromCor - middleSq : middleSq - fromCor
  return(colStep + rowStep - 1)
}


console.log(findSteps(targetSquare))
