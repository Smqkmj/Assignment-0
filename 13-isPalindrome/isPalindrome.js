function isPalindrome(word) {
  // Insert code here;

  const len = word.length;

  for (let i = 0; i < len / 2; i++) {

    if (word[i] !== word[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}

// Do not edit this line;
module.exports = isPalindrome;