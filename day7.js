var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day7.txt'),
    input = [],
    tower = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  // console.log(checkAll(prepareArray(input)))
  // parseInput(input).map(row => console.log(row))
  processParents(parseInput(input))
  // processParents(input)
  console.log(tower)
  console.log(tower.filter(item => item.parent === ''))
});

function parseInput(input){
  //parses the input
  return input.split('\n').map(row => row.split(', ')).map(row => row.map(entry => entry.split(' \-\> ')).reduce((prev,curr) => prev.concat(curr))).sort((i,j) => {
    if(i.length > j.length){ return 1}
    if(i.length < j.length){ return -1}
    return 0
  })
}

function processParents(input){
  //the first one has the weight
  input.map(row => {
    let parent = row.shift()
    let name =  parent.split(' ')[0]
    let weight = parseInt(parent.split(' ')[1].replace(/[()]/g, ''))
    //see if it already exists, if it does, add the weight
    let possibleEntry = tower.filter(item => item.name === name)
    if(typeof possibleEntry[0] !== 'undefined'){
      possibleEntry[0].weight = weight
    } else {
      tower.push({name: name , weight: weight, parent: ''})
    }

    if(row.length > 0){
      processChildren(row, name)
    }
  })
}

function processChildren(row, name){
  row.map(entry => {
    //see if it already exists, if it does, add the parents
    let possibleEntry = tower.filter(item => item.name === entry)
    // typeof myVar != 'undefined'
    if(typeof possibleEntry[0] !== 'undefined'){
      possibleEntry[0].parent = name
    } else {
      tower.push({name: entry, weight: 0, parent: name})
    }
  })
}