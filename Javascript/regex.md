# Examples using regex in solution

### check if pin is only numbers and 4 or 6 digits
```javascript
function validatePIN (pin) {
  let checkPin = /\D/;
  const isValid = checkPin.test(pin)
  
  if (!isValid) {
    const pinLength = pin.toString().length
    if ( pinLength === 4 || pinLength === 6) {
      return true
    }
  }
  return false;
}

// BEST WAY
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
```

## filter string to return only letter chars
```javascript 
const lettersOnly = str.split('').filter(char => /[a-zA-Z]/.test(char));
```
***

### remove anything after #
```javascript
function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}
```

### in a string with numbers at end, increment last number by 1 and return 

- regex
  - \(.*?): matches any sequence of characters (including an empty sequence) that precedes the last number in the string
  - (\d*): matches zero or more digits at the end of the string



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

### remove last element of specificed char from string

```javascript
const remove = s => s.replace(/!$/, '');
```

***

***
### Filter String
Constraints
1. All lowercase
2. >= 3 char in length
3. first and last are a vowel and are the same
```javascript
    const re = /^([aeiou])[a-z]{1,}\1$/;
```
***
### remove last element of specificed char from string

```javascript
const remove = s => s.replace(/!$/, '');
```

***

***
### Check to meet password conditions
1. min six chars
2. one lowercase
3. one uppercase
4. one digit
5. only alphanumberic chars

```javascript
    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
```
***

