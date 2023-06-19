// Problem Statement - you have given an integer and you need to reverse that integer.

let x = -123;
let revStr = x.toString().split("").reverse().join("");
if (revStr.endsWith("-")) {
  revStr = "-" + revStr;
  console.log(parseInt(revStr));
} else {
  console.log(parseInt(revStr));
}

//The DSA logic

// let num = 123;
// let rev = 0;
// let rem = 0;
// while (num != 0) {
//   rem = num % 10;
//   rev = rev * 10 + rem;
//   num = num / 10;
// }
// console.log(rev);
// console.log(typeof num, typeof rev, typeof rem);
