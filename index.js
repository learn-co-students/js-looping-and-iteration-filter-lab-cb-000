// Code your solution in this file

function findMatching(drivers, name){
  const driverName = name.toLowerCase();
  const matches = drivers.filter(function(driver){
    return driver.toLowerCase() === driverName;
  });
  return matches;
}

function fuzzyMatch(drivers, nameStart){
  const matches = drivers.filter(function(driver){
    return driver.substring(0, nameStart.length) === nameStart;
  });
  return matches;
}

function matchName(drivers, name){
  const matches = drivers.filter(function(driver){
    return driver.name === name;
  });
  return matches;
}
