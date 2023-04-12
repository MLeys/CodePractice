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

### square all numbers and return sum

```javascript
function squareSum(numbers){
  let sum = 0;
  for (let i=0; i<numbers.length; i++) {
    sum += Math.pow(numbers[i],2);
  }
  return sum;
}

// using REDUCE
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
```
***

### number of cubes to build a buildign given a volume

```javascript
function findNb(m) {
  let volume = 0;
  let cubes = 1
  
  while (volume < m) {
    volume += Math.pow(cubes, 3);
    if (volume === m) {
      return cubes;
    };
    cubes++
  }
  
  return (-1);
}
```

***

### find min and max in array

```javascript
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return { min, max };
}

// CLEANER faster using math
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

```
***

## Binomial Expansion (ax+b)^n
***
**IN PROGRESS** 
***

1. find values for each variable 
2. 


```javascript
function pascalsTri(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}

function expand(exp) {
  console.log(exp)
  const e = []
  let xIndex = 1;
  for (let i = 0; i < exp.length; i++) {
    if (/^[a-zA-Z]$/.test(exp[i])) {
      xIndex = i;
      break;
    }
  }
  const x = exp[xIndex];
  const a = Number(xIndex === 1 ? 1 : (exp[1] === '-') ? -1 : exp.slice(1, xIndex))
  const b = Number(exp.slice(xIndex +1, exp.indexOf(')')))
  const pow = Number(exp.slice(exp.indexOf('^')+1))
  
  const pascalsTriangle = pascalsTri(pow+1);
  console.log(pascalsTriangle[pascalsTriangle.length - 1], ' pascals')
  const pascals = pascalsTriangle[pascalsTriangle.length - 1]
  
  console.log(`x = ${x}`)
  console.log(`a = ${a}`)
  console.log(`b = ${b}`)
  console.log(`pow = ${pow}`)
  console.log(`===================\n`)
  let aPow = pow;
  let bPow = 0;

console.log(exp.slice(1, exp.indexOf('^')-1))
  if (pow === 0) return '1';
  if (pow === 1) return exp.slice(1, exp.indexOf('^')-1)
  
  console.log(pascals.length, ' LENGHT')
  for (let k = 0; k < pascals.length; k++) {
    
    const coef = pascals[k]
    let a2 = coef*Math.pow(a, aPow)
    console.log(a2, '= a')
    let b2 = coef*Math.pow(b, bPow)
    console.log(b2, '= b');
//     console.log(`\n===================\n`)
    if (aPow === pow) {
      if (a2 === 1) {
        e.push(`${x}^${aPow}`)
      }
    } else if (aPow === 0) {
      console.log('last iter')
      e.push(`${b2}`)
    } else if (aPow === 1) {
      e.push(`${a2+b2}${x}`)
    } else {
      e.push(`${a2*b2}${x}^${aPow}`)
    }
    
    
    console.log(`${a2*b2}^${aPow} ====== Line: ${k}`);
    aPow--
    bPow++
  }
  console.log(2)
  return e.join('+')
}


```
***