## Strings

### removed lowest num in array 
- do NOT mutate list

```javascript
function removeSmallest(numbers) {
  let lowestIdx = 0;
  let removedLowest = []
  if (numbers.length > 1) {
    for (let i = 1; i < numbers.length; i++) {
      (numbers[i] < numbers[lowestIdx]) ? lowestIdx = i : '';
    }
    removedLowest = [...numbers.slice(0, lowestIdx), ...numbers.slice(lowestIdx +1)];
  } 
  return removedLowest;
}

// BETTER WAY - use MATH to find lowest index
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
```
***

## double each char in string

```javascript
function doubleChar(str) {
  let doubleChars = ''
  for (char of str) {
    doubleChars += char + char
  }
  return doubleChars;
}

// BEST Practice
const doubleChar = (str) => str.split("").map(c => c + c).join("");
```
***

## Sort array of numbers based on value

1. Create helper function to compare values
   1. .sort() method does not look at actual number values
  
```javascript
function compareNumbers(a, b) {
  return a - b;
}

function solution(nums){
  let result = [];
  (nums) ? result = nums.sort(compareNumbers) : '';
  return result
}

// In-LINE callback function
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}
```
***


