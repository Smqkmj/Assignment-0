class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    var minNum = 0;
    var maxNum = nums.length - 1;
    var theMiddle = 0;

    while (minNum != maxNum) {
      theMiddle = Math.floor((maxNum + minNum) / 2);
      if (nums[theMiddle] == target) {
        return true;
      }
      else if (nums[theMiddle] > target) {
        maxNum = (theMiddle - 1);
      }
      else {
        minNum = (theMiddle + 1);
      }
    }

    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;