// Given an array of integers, find the sum of its elements. 


function sum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    sum += arr[i]
  }
  return sum
}
let arr = [1, 4.6, 12]
console.log(sum(arr));

// ## Prompt #1 `sum`
let sum = 0;
// Create a function `calculateSum` that takes in an array of integers. 
function calculateSum(arr) {

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Your function returns the sum of all integers within the input array.

// Note: Complete only the Pseudocode.

// ### Example

// Test Case 1: [1, 2, 5]  
// *Expected Output: **8***

// Test Case 2: [1, 2, 3, 4]  
// *Expected Output: **10***

// Test Case 3: [100, 50, 75, 80]  
// *Expected Output: **305***