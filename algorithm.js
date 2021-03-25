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