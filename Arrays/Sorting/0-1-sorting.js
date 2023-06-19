//Problem Statement :- You have given an array of 0's and 1's (as shown below), you need to sort this array in ascending order !
// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1];

// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1];

// let startIndex = 0;
// let endIndex = arr.length - 1;

// while (startIndex < endIndex) {
//   if (arr[startIndex] == 1 && arr[endIndex] == 0) {
//     arr[startIndex] = 0;
//     arr[endIndex] = 1;
//     startIndex++;
//     endIndex--;
//   } else if (arr[startIndex] == 0) {
//     startIndex++;
//   } else if (arr[endIndex] == 1) {
//     endIndex--;
//   }
// }

// console.log(arr);

// Solving Problem using Functions.

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1];
sortZeroOnes(arr);

function sortZeroOnes(nums) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex < endIndex) {
    if (nums[startIndex] == 1 && nums[endIndex] == 0) {
      nums[startIndex] = 0;
      nums[endIndex] = 1;
      startIndex++;
      endIndex--;
    } else if (nums[startIndex] == 0) {
      startIndex++;
    } else if (nums[endIndex] == 1) {
      endIndex--;
    }
  }

  console.log(nums);
}
