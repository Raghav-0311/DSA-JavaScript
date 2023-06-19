// Problem Statement : you have given an array of numbers you need to find the unique / non repeating number and display it !

let numarr = [1, 2, 1, 4, 2];
let ans = uniqueNumber(numarr);
console.log(ans);

function uniqueNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    let repFreq = 1;
    let curNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (curNum == nums[j]) {
        repFreq++;
      }
    }
    if (repFreq == 1) {
      return curNum;
    }
  }
  return -1;
}
