## prime factorizeation


```javascript
function primeFactors(n){
    function primeFactorsDistribution(n) {
    if (n < 2) return n.toString();

    let factors = {};

    // Count the number of 2s that divide n
    while (n % 2 === 0) {
        if (factors[2]) {
            factors[2]++;
        } else {
            factors[2] = 1;
        }
        n = n / 2;
    }

    // n must be odd at this point. So we can skip one element (Note i = i +2)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        // While i divides n, count i and divide n
        while (n % i === 0) {
            if (factors[i]) {
                factors[i]++;
            } else {
                factors[i] = 1;
            }
            n = n / i;
        }
    }

    // This condition is to handle the case when n is a prime number
    // greater than 2
    if (n > 2) {
        factors[n] = 1;
    }

    // Convert the factors into the desired format
    let result = '';
    for (let prime in factors) {
        if (factors[prime] === 1) {
            result += `(${prime})`;
        } else {
            result += `(${prime}**${factors[prime]})`;
        }
    }
    return result;
}

console.log(primeFactorsDistribution(86240));  // "(2**5)(5)(7**2)(11)"

}

```







Starting with the function:

    The initial number nn is 8624086240.

    Start with the smallest prime, 2. Check how many times nn is divisible by 2 and keep dividing:

    86240÷2=4312086240÷2=43120

    43120÷2=2156043120÷2=21560

    21560÷2=1078021560÷2=10780

    10780÷2=539010780÷2=5390

    5390÷2=26955390÷2=2695

Thus, 2525 or 3232 is a factor.

    Next, move to the next prime, which is 3. 26952695 is not divisible by 3.

    Try the next prime, 5:

    2695÷5=5392695÷5=539

Thus, 55 is a factor.

    Next, check if 539539 is divisible by the next prime, 7. It is not.

    539539 is also not divisible by 11.

    Continuing this process, you'll find that 539 is not divisible by any primes less than its square root. However, a closer look reveals that 539=7×77539=7×77 and 77=7×1177=7×11.

So, the prime factors are:

86240=25×5×72×1186240=25×5×72×11

Therefore, the prime factor distribution of 8624086240 is:
(25)(5)(72)(11)(25)(5)(72)(11)