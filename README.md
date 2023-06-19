# DataStructures and Algorithms with JavaScript.

---

## What is Data Structure?
A data structure is defined as a particular way of **``storing``** and **``organizing``** data in our devices to use the data efficiently and effectively. The main idea behind using data structures is to **minimize the time and space complexities.** An efficient data structure takes minimum memory space and requires minimum time to execute the data.

---

## What are Complexities?
The primary motive to use DSA is to solve a problem effectively and efficiently. How can you decide if a program written by you is efficient or not? This is measured by complexities. Complexity is of two types:
1. **``Time Complexity``** : Time complexity is used to measure the amount of time required to execute the code.
2. **``Space Complexity``** : Space complexity means the amount of space required to execute successfully the functionalities of the code. 
> **Note:** You will also come across the term **``Auxiliary Space``** very commonly in DSA, which refers to the extra space used in the program other than the input data structure.

---

### The topic of DSA consists of two parts: 
- Data Structures
- Algorithms 

---

## 1. Array in javascript
An array is a collection of items of the same variable type stored that are stored at contiguous memory locations.

![Array](https://media.geeksforgeeks.org/wp-content/uploads/20220712124140/1Darray.png)

It’s one of the most popular and simple data structures and is often used to implement other data structures. Each item in an array is indexed starting with 0.

### 1.1 Declaration of an Array:
There are basically two ways to declare an array.
- >let arrayName = [value1, value2, ...]; // Method 1
  ```js
  let house = ["1BHK", "2BHK", "3BHK", "4BHK"];
  ```
- >let arrayName = new Array(); // Method 2
  ```js
  let house = new Array("1BHK", "2BHK", "3BHK", "4BHK");
  ```
**Example:**
```js
// Initializing while declaring
// Creates an array having elements 10, 20, 30, 40, 50
let house = new Array(10, 20, 30, 40, 50);
     
// Creates an array of 5 undefined elements
let house1 = new Array(5);
     
// Creates an array with element 1BHK
let home = new Array("1BHK");
console.log(house)
console.log(house1)
console.log(home)
```
As shown in the above example the house contains 5 elements i.e. (10, 20, 30, 40, 50) while the house1 contains 5 undefined elements instead of having a single element 5. Hence, while working with numbers this method is generally not preferred but it works fine with Strings and Boolean as shown in the example above home contains a single element 1BHK.

**Output:**
```
[10, 20, 30, 40, 50]
[undefined, undefined, undefined, undefined, undefined]
["1BHK"]
```
**Example:** We can also update after initialization.
```js
// Creates an array of 4 undefined elements
let house1 = new Array(4);
     
// Now assign values
house1[0] = "1BHK"
house1[1] = "2BHK"
house1[2] = "3BHK"
house1[3] = "4BHK"
console.log(house1)
```
**Output:**
```
["1BHK", "2BHK", "3BHK", "4BHK"]
```
**Example:** An array in JavaScript can hold different elements that can store Numbers, Strings, and Boolean in a single array.
```js
// Storing number, boolean, strings in an Array
let house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
console.log(house)
```
**Output:**
```
["1BHK", 25000, "2BHK", 50000, "Rent", true]
```
**Example:** Accessing Array Elements of an Array in JavaScript are indexed from 0 so we can access array elements as follows.
```js
let house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
console.log(house[0]+" cost= "+house[1]);
let cost_1BHK = house[1];
let is_for_rent = house[5];
console.log("Cost of 1BHK = "+ cost_1BHK);
console.log("Is house for rent = "+ is_for_rent);
```
**Output:**
```
"1BHK cost= 25000"
"Cost of 1BHK = 25000"
"Is house for rent = true"
```

