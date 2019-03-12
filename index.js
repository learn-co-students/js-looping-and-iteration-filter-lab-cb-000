// Code your solution in this file
//
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name){
  let x = collection.filter(function (d) { return d.toUpperCase() === name.toUpperCase();});
  return x;
}

function fuzzyMatch(collection, name){
  let x = collection.filter(function (d) { return d.toUpperCase()[0] === name.toUpperCase()[0];});
  return x;
}

function matchName(collection, n){
  let x = collection.filter(function (d) { return d.name.toUpperCase()[0] === n.toUpperCase()[0];});
  return x;
}
