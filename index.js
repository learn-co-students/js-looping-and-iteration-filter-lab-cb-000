function findMatching(drivers, name) {

	const matches = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();});
	//you can also use RegEx to compare driver and name when they don't
	//have the same case
	
	return matches;
}

function fuzzyMatch(drivers, search){
	//returns all drivers whose names begin with the provided letters.
	//consider using some RegEx here

	const searchLength = search.length;
	const matches = drivers.filter(function(driver) {return driver.slice(0, searchLength) === search});

	return matches;
}

function matchName(drivers, name) {

	drivers.filter (function(driver) {return})
	/*need to return something like this: {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }*/

}