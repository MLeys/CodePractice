# Math operations and notes

### Calculating with functions 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

GIVEN:
function zero() {}
function one() {}
...
function add() {}
function subtract() {}
...

1. each number takes an argument
   1. if argument is a valid function will be true
      1. if true call that operation
      2. if not return its cooresponding number
2. next operation functions run and call a number operation


```javascript
function zero(operation) {
  return operation ? operation(0) : 0; 
}
function one(operation) {
  return operation ? operation(1) : 1;
}
function two(operation) {
  return operation ? operation(2) : 2;
}
function three(operation) {
  return operation ? operation(3) : 3;
}
function four(operation) {
  return operation ? operation(4) : 4;
}
function five(operation) {
  return operation ? operation(5) : 5;
}
function six(operation) {
  return operation ? operation(6) : 6;
}
function seven(operation) {
  return operation ? operation(7) : 7;
}
function eight(operation) {
  return operation ? operation(8) : 8;
}
function nine(operation) {
  return operation ? operation(9) : 9;
}

function plus(num) {
  return function(num2) {
    return num2 + num;
  }
}
function minus(num) {
  return function(num2) {
    return num2 - num;
  }}
function times(num) {
  return function(num2) {
    return num2 * num;
  }}
function dividedBy(num) {
  return function(num2) {
    return Math.floor(num2 / num)
  }
}
```
***

## Square each digit in a num and return concated num
- For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
  

```javascript
function squareDigits(num){
  let numString = '';
  for (n of num.toString()) {
    const squared = Math.pow(n, 2)
    numString+= squared
  }
  return Number(numString);
}

//BETTER/ CLEANER
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

// OR
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}
```
***

### Take a Number And Sum Its Digits Raised To The Consecutive Powers 
- 89= 8^1 + 9^2
- 135 = 1^1 + 3^2 + 5^3
  
1. iterate through range of nums
2. for each number compute sum of digits raise to consecutive powers
   1. convert to string
   2. split into array
   3. reduce ( using the accumulator) to add digits raied to consec power


```javascript
function sumDigPow(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    const sum = i.toString().split('').reduce((acc, digit, index) => acc + Math.pow(digit, index + 1), 0);
    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}
```
*** 