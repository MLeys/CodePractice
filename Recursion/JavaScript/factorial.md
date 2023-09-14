###JavaScript Factorial Function

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4)); // Outputs: 120


```

    First Call: factorial(4)

        Since nn is not 00, it goes to the recursive case.

        It will return 4×factorial(3)4×factorial(3)

        Now, we need to evaluate factorial(3):

    Second Call: factorial(3)

        Again, nn is not 00, so it will return 3×factorial(2)3×factorial(2)

        So, now we need to find out what factorial(2) is:

    Third Call: factorial(2)

        nn is still not 00, so it will return 2×factorial(1)2×factorial(1)

        To find out what factorial(2) returns, we first need to find out factorial(1):

    Fourth Call: factorial(1)

        Yet again, nn is not 00, so it will return 1×factorial(0)1×factorial(0)

        Before we can determine what factorial(1) returns, we need to evaluate factorial(0):

    Fifth Call: factorial(0)
        Now, nn is 00, so according to our base case, it will return 11.

Using the values from the recursive calls:

    factorial(1) returns 1×1=11×1=1
    factorial(2) returns 2×1=22×1=2
    factorial(3) returns 3×2=63×2=6
    factorial(4) returns 4×6=244×6=24

So, factorial(4) is 2424.