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

### create a pyramid given a number of floors or layers

```javascript
function towerBuilder(nFloors) {
  if (nFloors === 1) {
    return ['*']
  }
  
  let pyramid = [];
  const star = '*';
  const space = " ";
  const width = nFloors + nFloors -1;
  let stars = 1;
  let start = 0;
  let spaces = 0;

  for (let floor = 1; floor <= nFloors; floor++) {
    let layer = ''
    spaces = width - stars;
    start = Math.floor((width - stars) / 2);
    
    layer = space.repeat(spaces/2) + star.repeat(stars) + space.repeat(spaces/2)

    pyramid.push(layer)
    
    stars += 2
  }
  return pyramid
}

// CLEANER
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

// ALTERNATIVE
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
```
***

### Create a diamond ring looing string given a size of the ring per layer

```javascript
function diamond(n){
  if (n <= 0 || n % 2 === 0) {
    return null;
  }
  const diamond = [];
  
  function buildLayer(sizeRing, numStars) {
    const spaces = ' '.repeat((sizeRing - numStars) / 2);
    const stars = '*'.repeat(numStars)
    diamond.push(spaces + stars + '\n')
  }
  // top layer
  for (let i = 1; i <= n; i+=2){
    buildLayer(n, i)
  }
  // bottom layer
  for (let i = n - 2; i >= 1; i -= 2) {
    buildLayer(n, i)
  }
  
  return diamond.join('');
}

// CLEANER way with absolute Math
function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

```
***

### String incrementer, add 1 to number at end of string

```javascript 
function incrementString (string) {

  const split = string.match(/^(.*?)(\d*)$/);
  console.log(split, '<- split');
  const letters = split[1]
  const numbersMatch = split[2];
  
  if (numbersMatch === '') {
    return letters + "1";
  }

  let numbers = String(Number(numbersMatch) + 1);

  (numbersMatch.length !== numbers.length) ? numbers = numbers.padStart(numbersMatch.length, "0"): '';

  return letters + numbers  
}


//ALTERNATIVES
function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

// or

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

```
***

### sort array of strings by length

```javascript
function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
};
```

***

### strip comments from a line

```javascript
function solution(input, markers) {
  const lines = input.split('\n').map((line) => {
    console.log(`checking -->\n${line}`)
    for (let i = 0; i < markers.length; i++) {
      console.log(`checking for marker: ${markers[i]}`)
      const markerIdx = line.indexOf(markers[i]) 
      console.log(`markerIdx: ${markerIdx}`)
      
      if (markerIdx > -1) {
        return line.slice(0, markerIdx).trimEnd();
      } 
    }
      return line
  }).join('\n')  

  return lines
};

// CLEANER WAY with reduce
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
```
***

### Count qty of element in array and return element that shows up an odd num of times

```javascript
function findOdd(A) {
  const nums = {}
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    nums[num] = nums[num] ? nums[num] + 1 : 1;
  }
  for (const num in nums) {
    if (nums[num] % 2 === 1) {
      return Number(num);
    }
  }
}

// CLEANER use REDUCE
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

```
***

### Rot13 char codes. Return letter as 13 charCodes more than orig charcode

```javascript
function rot13(message) {
  let rot13 = 13;
  let result = ""; 
  for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i);
    let char = message[i];
    
    if (isAlphaChar(code)) {
      char = String.fromCharCode(alphaCodeToRot13(code));
    }
    result += char;
  }
  return result;
}

function alphaCodeToRot13(alphaCode) {
  let rot13 = 13;
  let newCode = alphaCode + rot13;
  if ((newCode > 90 && alphaCode < 91) || newCode > 122) {
    newCode -= 26;
  }
  return newCode;
}

function isAlphaChar(code) {
  return (code > 64 && code < 91) || (code > 96 && code < 123);
}

```
***

### return string with no duplicates next to each oter in Unique in order

```javascript
var uniqueInOrder=function(iterable){
  // check if is array, if not, split string
  if (!Array.isArray(iterable)) {
    iterable = iterable.split('');
  }

  const orderedUnique = [];
  //if current ele diff, add to new array
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i-1]) {
      orderedUnique.push(iterable[i]);
    }
  }

  return orderedUnique;
}

```
***
***
### return string in reverse order if given as string not a number

```javascript
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    } catch (e){
        console.log(e.message)
    } finally {
        console.log(s)
    }
}

```
***
