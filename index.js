
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver['name'] === string);
}