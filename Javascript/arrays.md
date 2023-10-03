# Quick Reference to reusable tools for manipulating arrays

***

### Sort and filter array of numbers to unique values

1. Sort largest - smallest
2. Include only unique numbers

```javascript
function sortAndUnique(arr) {
  return arr
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => b - a);
}
```
***

### Find all prime numbers in array

```javascript
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```
***

### Find the sum of the largest contiguous subsequence 

Given: array of integers

```javascript
function maxSequence(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // Output 
```
***

