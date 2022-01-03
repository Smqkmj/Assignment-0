function frequencyCounter(word) {
  // Insert code here;
  var count = {};

  for (var i = 0; i < word.length; i++) {

    var uniqueLetter = word.charAt(i)
    if (count[uniqueLetter]) {
      count[uniqueLetter]++;
    }
    else
      count[uniqueLetter] = 1;
  }
  return count;
}

// Do not edit this line;
module.exports = frequencyCounter;