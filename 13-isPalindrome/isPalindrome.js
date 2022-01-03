function isPalindrome(word) {
  // Insert code here;
  //THE CURRENT STATE OF TESTING
  // √ should return a boolean value
  // 1) should return true if the input `word` is a palindrome
  // √ should return false if the input `word` is not a palindrome
  // 2) should pass auxillary test cases

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