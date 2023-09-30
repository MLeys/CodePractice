

Use recursion in any situation that requires exploring multiple possibilities or paths, such as:

    Calculating all possible combinations of elements.
    Checking all possible routes between two destinations.

Recursion provides the simplest solution to problems like these by allowing a function to continue through each possibility in a new recursive call.


## recursive with helper
```javascript
function sumArrayOfNums(arr){
    let index = 0;
    let sum = 0;
    // Notice the lack of parameters in rSum!
    function rSum(){
      if(index === arr.length){
        return sum;
      }
      sum += arr[index];
      index++;
      return rSum();
    }
    // Once you’ve defined the helper function, make sure you call it!
    return rSum();
  }
  ```


### find all subsets of given array

- #subsets = 2^n, n = number of elements
```
def all_subsets(array):
  subset = new int[array.length]
  helper(array, subset, 0)
def helper(array, subset, i):
  if i === array.length:
    print_set(subset)
  else:
    subset[i] = null
    helper(array, subset, i + 1)
    subset[i] = array[i]
    helper(array, subset, i + 1)
```
***
## find max num in array using recursion
###Step 1: Define the Base Case

The first thing we need to consider is the base case for our recursion. In other words, what condition will end the recursion? Here, it's an empty array. If the array is empty, we return -Infinity, mimicking the behavior of Math.max for an empty array.
```
javascript

if (array.length === 0) return -Infinity;
```
###Step 2: Destructure the Array

We then move on to the recursion part. The idea is to break down the array into smaller and smaller pieces until we hit the base case (the empty array). To do that, we use array destructuring to split the array into its "head" and "tail":

javascript
```
const [head, ...tail] = array;
```
    head contains the first element of the array.
    tail contains the rest of the elements (everything except the first).

###Step 3: Recursive Call

Next, we make a recursive call to find the maximum number in the "tail" of the array:

javascript
```
const nextMax = max(tail);
```
This is important because it brings us closer to our base case, and each recursive call works on a progressively smaller array.
###Step 4: Determine the Max

The maximum value between the "head" and the maximum value of the "tail" (nextMax) needs to be determined. We do that by using the ternary operator:

javascript
```
return head > nextMax ? head : nextMax;
```
If the head is greater than nextMax, head becomes the new maximum. Otherwise, nextMax remains the maximum value.
###Final Code:

Here's how all the pieces fit together:

javascript
```
function max(array) {
  if (array.length === 0) return -Infinity; // Base Case
  
  const [head, ...tail] = array;  // Destructuring
  
  const nextMax = max(tail);  // Recursive Call
  
  return head > nextMax ? head : nextMax;  // Determine the Max
}
```
***
