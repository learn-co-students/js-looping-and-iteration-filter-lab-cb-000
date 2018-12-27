// Code your solution in this file
const findMatching = (drivers, query) => {
  const lowerCaseQuery = query.toLowerCase();

  return drivers.filter( (driver) => {
    return driver.toLowerCase() === lowerCaseQuery;
  });
};

const fuzzyMatch = (drivers, substr) => {
  return drivers.filter((driver) => {
    return !driver.indexOf(substr);
  });
};

const matchName = (drivers, nameToMatch) => {
  return drivers.filter((driver) => {
    return driver.name === nameToMatch;
  });
};
