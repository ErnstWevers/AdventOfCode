var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day8.txt'),
    input = [],
    register = [],
    highest = 0;

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  evaluateInput(parseInput(input))
  // console.log(parseInput(input))
  console.log(sortResults(register))
  console.log(highest)
});

function parseInput(input){
  //parses the input and returns a sorted collection of parent/child relationships
  let parsed =  input.split('\n').map(row => row.split(' if ')).map(entry => entry[0].split(' ').concat(entry[1]))
  simplifyToAdd(parsed)
  return fixFunction(parsed)
}

function simplifyToAdd(input){
  //fixes stupid input form for increase and decrease
  return input.map(row => {
    if(row[1] === 'dec') {row[2] = -row[2]}
    row.splice(1,1)
  })
}

function fixFunction(input){
  return input.map(row => {
    let one = row[2].split(' ')[0]
    let two = row[2].split(' ').slice(1,3).join(' ')
    return {eval: one, targ: row[0], add: parseInt(row[1]), func:two}
  })
}

function evaluateInput(input){
  input.map(entry => {
    checkExist(entry)
    let toCheck = register.find(item => item.name === entry.eval)
    let toEdit = register.find(item => item.name === entry.targ)
    if(eval(`${toCheck.value} ${entry.func}`)){
      toEdit.value += entry.add
      if(toEdit.value > highest){highest = toEdit.value}
    }
  })
}

function checkExist(entry){
  if(typeof (register.find(item => item.name === entry.eval)) === 'undefined') {register.push({name: entry.eval, value:0})}
  if(typeof (register.find(item => item.name === entry.targ)) === 'undefined') {register.push({name: entry.targ, value:0})}
}

function sortResults(input){
  input.sort((i,j) => {
    if(i.value > j.value){ return -1}
    if(i.value < j.value){ return 1}
    return 0
  })
  return input
}