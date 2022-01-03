class MySolution {
  countDownSum(num) {
    // Insert code here;

    if (num === 1)
      return 1;
    else
      return num + this.countDownSum(num - 1);
  }
}
let object = new MySolution();
console.log(object.countDownSum(5));
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;