function findMatching(drivers, name) {

	const matches = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();});
	//you can also use RegEx to compare driver and name when they don't
	//have the same case
	
	return matches;
}

function fuzzyMatch(drivers, name){
	//returns all drivers whose names begin with the provided letters.
	//consider using some RegEx here

}