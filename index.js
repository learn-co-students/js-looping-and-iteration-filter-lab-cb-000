function findMatching(drivers, str) {
  return drivers.filter(e => e.toUpperCase() === str.toUpperCase())
}


function fuzzyMatch(drivers, str) {
  return drivers.filter(e => e[0] === str[0])
}


function matchName(drivers, str) {
  return drivers.filter(e => e.name === str)
} 