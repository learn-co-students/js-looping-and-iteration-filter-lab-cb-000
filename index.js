// Code your solution in this file
function findMatching(group, name) {
  return group.filter(function (driver) {return driver.toLowerCase() == name.toLowerCase(); })
}
function fuzzyMatch(group, name) {
  return group.filter(function (driver) {return driver[0] === name[0]; })
}

function matchName(group, name) {
  return group.filter(function (driver) {return driver.name == name; })
}
