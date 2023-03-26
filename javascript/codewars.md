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
```
***