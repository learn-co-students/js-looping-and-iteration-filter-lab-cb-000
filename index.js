// Code your solution in this file
function findMatching(array, match) {
  return array.filter(function (element) {
    return element == match || element == match.toLowerCase()
  })
}

function fuzzyMatch(array, letters) {
  const lettersLength = letters.length
  return array.filter(function (element) {
    return element.slice(0, lettersLength) == letters
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (element) {
    return element.name == name
  })
}
