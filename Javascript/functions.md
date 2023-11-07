# Saved reuseable javascript functions

***
### Create an array of a range between two numbers.

Given: 
1. Two numbers
2. Step incraments

```javascript
function arrayFromRange(number1, number2, step) { 
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  return Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step);
}

```

***
