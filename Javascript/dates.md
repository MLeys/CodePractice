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
// BETTER WAY not to waste memory by creating new Date object every iteration
  let date = new Date(year,0,13);
  let count = 0;
  for(let i=0; i<12; i++) {
    date.setMonth(i);
    if(date.getDay()===5) {
      count++;
    };
  };
  return count;
```
