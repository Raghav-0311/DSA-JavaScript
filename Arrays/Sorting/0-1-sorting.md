# Problem Statement :- 
**You have given an array of 0's and 1's (as shown below), you need to sort this array in ascending order !**
```js
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1];
```
# Solution :-
>### **Approach :-** `first we will declare two variables to store the values of indexes of the given arr, the first variable will store the start index value and the second variable will store the end index value, then we will iterate through this array using a loop where we difine a condition to traverse this array until start index value is less then end index value. Now inside the loop we will check for some conditions using if - else if ladder. So our first condition will be like, if the value of start index of array is 1 AND the value of end index of array is 0 -> then only we swap their values and increament the start index by 1 and also decreament the end index by 1. Our next condition will be if the value of start index of array is 0, then we simply increament the start index by 1. Our last condition will be if the value of end index of array is 1, then we simply decreament the end index by 1. That's it`
### **Code :-**
```js
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
```
### **Output :-**
```
[
  0, 0, 0, 0, 0,
  1, 1, 1, 1, 1,
  1
]
```

