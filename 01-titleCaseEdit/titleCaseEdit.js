function titleCaseEdit(title) {
  // Insert code here;
  var letter = title.toLowerCase().split(" ");
  for (var i = 0; i < letter.length; i++) {
    letter[i] = letter[i][0].toUpperCase() + letter[i].substring(1);
  }
  return letter.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;