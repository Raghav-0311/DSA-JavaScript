# Problem Statement :- 7. Reverse Integer
**Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.**
```js
let x = -123;
```
# Solution :-
>### **Approach :-** `first we will convert the number to string using .toString() method. then we will split the converted string with an empty space like .split(""), we have an array of strings where each string is a digit of the given number, now we will reverse that array using .reverse() method. then we need to join that reversed array of strings like we split it as .join(""). now if you observe we successfully reversed our number but the problem here is that the final reversed number is a string and not a number so now we have to parse that reversed string to integer using parseInt(reversed string). as you see it works fine for positive numbers but in the problem statement we have a negitive number so we need to test a condition, that if our reversed string ends with "-" then we add "-" in the starting of our reversed string and parse it to integer (as converting it to integer will automatically elemenates the end "-"), in our second case if our reverse string do not ends with "-" then we simply parse it to integer. Thats it !`
### **Code :-**
```js
let x = -123;
let revStr = x.toString().split("").reverse().join("");
if (revStr.endsWith("-")) {
  revStr = "-" + revStr;
  console.log(parseInt(revStr));
} else {
  console.log(parseInt(revStr));
}
```
### **Output :-**
```
-321
```
## The DSA Logic :-
### **Code :-**
```js
let num = 123;
let rev = 0;
let rem = 0;
while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = num / 10;
}
console.log(rev);
```
>**Note:** `The Code block shown above is not working with JavaScript please identify the problem !!!`
