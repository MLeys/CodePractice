

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

