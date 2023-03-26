#### Test string to see if palindrome.

1. Change to lowercase
2. .split(‘’) string
3. .reverse string
4. .join(‘’)
5. Compare original with reversed ===

```javascript

  function isPalindrome(x) {
  const lowerCaseX = x.toLowerCase();
  const backwardsX = lowerCaseX.split('').reverse().join('');
  return lowerCaseX === backwardsX
}
```

***



