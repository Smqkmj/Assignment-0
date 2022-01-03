function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var sumOfMinAndMax = 0;
  var maxNum = nums[0];
  var minNum = nums[0];

  //finding the max number
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }

  //finding the min number
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }
  sumOfMinAndMax = maxNum + minNum;
  return sumOfMinAndMax;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;