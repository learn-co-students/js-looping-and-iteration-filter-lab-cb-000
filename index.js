// Code your solution in this file
function findMatching (drivers, string) {
  const newDrivers = [];

  for (const driver of drivers) {
    if ( driver == string || driver.toLowerCase() == string.toLowerCase() ) {
      newDrivers.push(driver);
    }
  }

  return newDrivers;
}


function fuzzyMatch(drivers, string) {
  const newDrivers = [];

  for (const driver of drivers) {
    if ( driver[0] == string[0]) {
      newDrivers.push(driver);
    }
  }

  return newDrivers;
}


function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
