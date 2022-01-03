function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var unionSet= new Set();
  
  for (let srt of args){
	for (let nums of srt){
		unionSet.add(nums);
	}
  }
	return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;