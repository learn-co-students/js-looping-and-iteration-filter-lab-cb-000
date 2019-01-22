function findMatching(collection, targetName) {
  return collection.filter(item => item.toUpperCase() === targetName.toUpperCase());
}

function fuzzyMatch(collection, text) {
  return collection.filter(item => text === item.slice(0,text.length));
}

function matchName(collection, targetName) {
  return collection.filter(item => item.name === targetName);
}
