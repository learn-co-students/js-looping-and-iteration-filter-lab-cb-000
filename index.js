// This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}


// This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length; // get # of letters that are being searched (ie: fuzzyMatch for 'Sa' --> 2 letters)
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}
/*
Example:

  list = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

  function fuzzyMatch (list, 'Sa') {
    let lengthOfName = partialName.length; // get # of letters that are being searched (ie: fuzzyMatch for 'Sa' --> 2 letters)
    return list.filter(function (driverName) {
      // Return names in list that start with the first two letters 'Sa' --> (ie. 'Sammy'.slice(0, 2) //=> "Sa")
      return driverName.slice(0, lengthOfName) === partialName; //=> ['Sammy', 'Sarah', 'Sally']
    });
  }

*/


// accesses the data structure to check if name matches
function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
