// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (item) {return item.toLowerCase() === name.toLowerCase();});
}
function fuzzyMatch(array, letters) {
  return array.filter(function (item) {return item.slice(0, letters.length) === letters;});
}
function matchName(array, string) {
  return array.filter(function (item) {return item.name === string;});
}
