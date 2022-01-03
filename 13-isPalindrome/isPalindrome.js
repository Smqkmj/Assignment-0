function isPalindrome(word) {
  // Insert code here;

  let falseCounter = 0;
  let halfWord = Math.ceil(word.length/2);
  for (let i = 0; i < halfWord; i++) {
    if (word.charAt(i) != word.charAt(word.length - (1 + i))) {
      falseCounter++;
    }

  }
  if (falseCounter == 0)
    return true;
  else
    return false;


}

// Do not edit this line;
module.exports = isPalindrome;