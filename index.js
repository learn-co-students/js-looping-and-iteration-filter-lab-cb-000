// Code your solution in this file
function findMatching(collection, arg){
  return collection.filter(function (item) {
    return item.toUpperCase() === arg.toUpperCase();
  });
}

// My own seperation of concerns for fuzzymatch substring action
function firstLetters(string){
  return string.substring(0,2);
}

function fuzzyMatch(collection, arg){
  return collection.filter(function (item) {
    return firstLetters(item) === firstLetters(arg);
  });
}

function matchName(collection, arg){
  return collection.filter(function (item) {
    return item.name.toUpperCase() === arg.toUpperCase();
  });
}
