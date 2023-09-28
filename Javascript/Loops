## different Loop Examples

### Supermarket Queue
Given: array of numbers, number of registers

Each number represents a customer, find how long it will take all customers to checkout

```javascript
function queueTime(customers, n) {
  if (n >= customers.length) return customers.length > 0 ? Math.max(...customers) : 0;

  if (n === 1) return customers.reduce((acc, num) => acc + Number(num));
  
  let times = Array(n).fill(0);

  for (let time of customers) {
    let minTimeIndex = times.indexOf(Math.min(...times));
    times[minTimeIndex] += time;
  }
  
  return Math.max(...times)
}

```
***
