##Code dealing with dates

### find how many fridays are the 13th in a given year
```javascript
function findFriday13s(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13); // 13th of each month
    if (date.getDay() === 5) { // 5 means Friday
      count++;
    }
  }
  return count;
}

// Example usage:
const numberOfFriday13s = findFriday13s(2023);
```
