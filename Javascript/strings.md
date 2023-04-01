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

### Replace letters in string with pos (index) in alphabet

**one way**
1. create alphabet object with values
2. filter text into only letter chars
3. iterate through
   1. push each cooresponding value to array
4. return array

```javascript
function alphabetPosition(text) {
  console.log(`Given: ${text}`)
  const alphabet = getAlphabet();
  const onlyLetters = text.split('').filter(char => /[a-zA-Z]/.test(char));
  let charValues = [];
  
  for (let i = 0; i < onlyLetters.length; i++) {
    
    charValues.push(alphabet[onlyLetters[i].toLowerCase()])
    console.log(charValues, " updated")
  }
 
  
  return charValues.join(' ');
}

function getAlphabet() {
  const alphabet = {}
  let charCode = 'a'.charCodeAt(0);
  for (let i = 1; i <= 26; i++) {
    const letter = String.fromCharCode(charCode)
    alphabet[letter] = i;
    charCode++
  }
  return alphabet;
}
```
**another way without creating alphabet object**
```javascript 
function alphabetPosition(text) {
  let result = ""; 
  for (let i = 0; i < text.length; i++){
    const code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) {
      result += (code - 64) + " "
    };
  }

  return result.slice(0, result.length-1);
}
```
***

### match two arrays of numbers 

```javascript
function comp(array1, array2){
  if (array1 !== null && array2 !== null) {
    let matchArray = []
    for (let i = 0; i < array2.length; i++) {
      const value = array2[i]
      const squared = Math.sqrt(value)
      matchArray.push(squared)
    }
    return (matchArray.sort().toString() === array1.sort().toString()) 
            || (matchArray.length === 0 && array1.length === 0)
  }
  return false
}
```
***

### check if directions next to each other match and are 'useless' return simplified dirs

```javascript
function dirReduc(arr){
  let simpleDirections = [];

  function getOppositeDir(direction) {
    if (direction ==='NORTH') {
      return 'SOUTH'
    }
      if (direction ==='SOUTH') {
      return 'NORTH'
    }
      if (direction ==='EAST') {
      return 'WEST'
    }
      if (direction ==='WEST') {
      return 'EAST'
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const dir = arr[i];
    const oppositeDir = getOppositeDir(dir);
    const lastDir = simpleDirections[simpleDirections.length - 1];

    if (oppositeDir === lastDir) {
      simpleDirections.pop();
    } else {
      simpleDirections.push(dir)
    }
  }

  return simpleDirections

}

// SIMPLIFIED 
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

```
***