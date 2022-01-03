class MySolution {
  countDownSum(num) {
    // Insert code here;
    if (num == 0) {
      return 0;
    }
    if (num == 1) {
      return 1;
    }
    return (num + (countDownSum(num - 1)));


  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;