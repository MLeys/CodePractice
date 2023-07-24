#### Test string to see if palindrome.

1. Change to lowercase
2. .split(‘’) string
3. .reverse string
4. .join(‘’)
5. Compare original with reversed ===

```javascript
function isPalindrome(x) {
  const lowerCaseX = x.toLowerCase();
  const backwardsX = lowerCaseX.split('').reverse().join('');
  return lowerCaseX === backwardsX
}
```

***

### In string of words, find highest scoring word:
#### -each letter has a score starting at a=1

1. create array of alphabet
   1. finds charCode of letter and changes to 0
   2. loops through alphabet
      1. fromCharCode(charCode) grabs next number code from sequence
   3. assigns score to each letter (not really necessary for this example as we could just use the index)
2. Create alphabet from previous function
3. Split the sentence into array of words
4. loop through each word
5. loop through each letter
6. check if that word is higher than current highest
   1. if so, assign to high varables
7. Finally, return highest word

```javascript
function getAlphaWithValues() {
  const alphabet = {};
  let charCode = 'a'.charCodeAt(0);
  for (let i = 1; i <= 26; i++) {
    const letter = String.fromCharCode(charCode)
    alphabet[letter] = i;
    charCode++;
  }
  return alphabet;
}

function high(x){
  const alphabet = getAlphaWithValues();
  const string = x.split(' ');
  let highScore = 0;
  let highWord = '';
  
  for (const word of string) {
    let score = 0;
    for (const letter of word) {
      score += alphabet[letter]
    }
    if (score > highScore) {
      highScore = score;
      highWord = word;
    }
  }
  return highWord;
}
```
***
### Mexican Wave - Iterate through string and return each letter capitalized in sequence.

```javascript
function wave(str){
  let waveStr = [];
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
//         const newStr = str.replace(str[i], str[i].toUpperCase()) 
        // this does not work because it is not updating the original string?
        const newStr = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);

        waveStr.push(newStr)
      }
    }
  }

  console.log(waveStr)
  return waveStr
}
```
***

### Check if ending of string matches a param

```javascript
function solution(str, ending){
  if (str && ending) {
    const endLength = ending.length
    const newStr = str.slice(-endLength);
    return (newStr === ending ? true : false);
  }
  return true
}

// BETTER ANSWER
function solution(str, ending){
  return str.endsWith(ending);
}
```
***

### sum of all numbers in array

```javascript
function sum (numbers) {
  if (numbers) {
    const sum = numbers.reduce((acc, cV) => acc + cV, 0);
    return sum;
  }
  return 0;  
};
```
***

### Check if even number

```javascript
function testEven(n) {
    return n%2===0;
}
```
***

### Triple Fibonaci sequence

```javascript
function tribonacci(signature,n){
  let sequence = [];
  let first = signature[0];
  let second = signature[1];
  let third = signature[2];
  
  switch (n) {
    case 0:
      return sequence;
    case 1:
      return [first];
    case 2:
      return [first, second];
    case 3:
      return [first, second, third];
    default:
      sequence = [ first, second, third ]

      for (let i = 0; i < n-3; i++) {
        sequence.push(first + second + third)
        first = sequence[i + 1];
        second = sequence[i + 2];
        third = sequence[i + 3];

      }
      return sequence;
  }
}

// BEST WAY
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
```
***

### Remove every other element in array
```javascript
function removeEveryOther(arr){
  let newArray = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    (i % 2 === 0) ? newArray.push(arr[i] ) : ''
  }
  return newArray;
}

//BETTER WAY - use filter
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
```
***

### Return domain only from url using regex

```javascript
function domainName(url){
  const findDomain = /(?:https?:\/\/)?(?:www\.)?([a-z0-9-]+)\.[a-z]+(?:\.[a-z]+)?/i;
  const domainMatches = findDomain.exec(url);
  
  return domainMatches[1];
}

// BETTER WAYS

//no regex
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// more simple regex
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

```
***

### given a number, determin the response in a sequence of responses (array) #### I love you a little, a lot ...

```javascript
function howMuchILoveYou(nbPetals) {
  switch (nbPetals % 6) {
    case 0:
      return "not at all"
    case 1:
      return 'I love you';
    case 2:
      return "a little";
    case 3:
      return "a lot";
    case 4:
      return "passionately";
    case 5:
      return "madly"
  }
}
```
***

### Add space (between words) in string containing camelCase

```javascript 
function solution(string) {
  const spaced = [];
  for (letter of string) {
    if (letter.toLowerCase() !== letter){
      spaced.push(' ')
    }
    spaced.push(letter)
  }
  return spaced.join('')
}

// Regex Better way
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
```
***

### count number of time a char is in string - return object
  1. create empty obj
  2. iterate through string
  3. create var for current char
  4. set the current key value
     1. first check if already exists with 'countObj[char]' 
     2. add to it or set as 1 if first instance

```javascript
function count(string) {
  let countObj = {}
  for (let i = 0; i < string.length; i++) {
    const char  = string[i];
    countObj[char] = countObj[char] ? countObj[char] + 1 : 1;
  }
  return countObj;
}


// BEST PRACTICE
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
```
***

### number of divisors for a number

```javascript 
function getDivisorsCnt(n){
  let numDivisors = 1;
  if ( n !== 1) {
    for (let i = 1; i <= n/2; i++) {
      if (n % i === 0) {
        numDivisors++
      }
    }
  }
  return numDivisors;
}
```
***

### filter array  of words (strings ) by another array of strings

```javascript
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let birdsNoGeese = birds
  for (let i = 0; i < geese.length; i++) {
    birdsNoGeese = birdsNoGeese.filter(bird =>  bird !== geese[i])
  }
  return birdsNoGeese
};

```
***


***
Partition Detection
- take a list of points that make lines and return true if they create at least 2 parts in a square.

  - grab each wall
  - check length 
    - Math.abs(x2 - x1)
  - check length against h / w
    - if as long or longer as h / w 
      - x or y ( to match h / w above) 
        - cross or touch MIN (0) and MAX (h/w) axis
      -IF TRUE: ( crosses both bounds of h or w) 
         -CHANGE passW/H = true and exit because it has a full wall.
         
    -check if any LINES exist due to shared walls 
      if match found ( store the number in array 
          --let lines = []
              lines.push([ x or y, number(constant)])
