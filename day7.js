var fs = require('fs'),
    readStream = fs.createReadStream('./dataInput/day7.txt'),
    input = [],
    tower = [];

readStream.on('data', function(chunk) {
  input+= chunk;
});

readStream.on('end', function() {
  processEntries(parseInput(input))
  console.log(tower)
  console.log(tower.filter(item => item.parent === ''))
});

function parseInput(input){
  //parses the input and returns a sorted collection of parent/child relationships
  return input.split('\n').map(row => row.split(', ')).map(row => row.map(entry => entry.split(' \-\> ')).reduce((prev,curr) => prev.concat(curr))).sort((i,j) => {
    if(i.length > j.length){ return -1}
    if(i.length < j.length){ return 1}
    return 0
  })
}

function processEntries(input){
  //the first one has the weight
  input.map(row => {
    let parent = row.shift()
    let name =  parent.split(' ')[0]
    let children = row.length > 0 ? row : null
    let weight = parseInt(parent.split(' ')[1].replace(/[()]/g, ''))
    let possibleEntry = tower.find(item => item.name === name)

    //see if it already exists, if it does, add the weight
    if(typeof possibleEntry !== 'undefined'){
      possibleEntry.weight = weight
    } else {
      tower.push({name: name , weight: weight, parent: '', children: children})
    }

    //if the entry contians childred process them
    if(row.length > 0){
      processChildren(row, name)
    }
  })
}

function processChildren(row, name){
  row.map(entry => {
    //see if it already exists, if it does, add the parents
    let possibleEntry = tower.find(item => item.name === entry)
    // typeof myVar != 'undefined'
    if(typeof possibleEntry !== 'undefined'){
      possibleEntry.parent = name
    } else {
      tower.push({name: entry, weight: 0, parent: name})
    }
  })
}

//checklevel: check all the children for total weight and move into the incorrect branch

//recurse throught the branch and return a single weight
function branchWeight(name){

}

//find the next eligible talget for reducing
function nextEligible(){

}