# Examples using regex in solution

### check if pin is only numbers and 4 or 6 digits
```javascript
function validatePIN (pin) {
  let checkPin = /\D/;
  const isValid = checkPin.test(pin)
  
  if (!isValid) {
    const pinLength = pin.toString().length
    if ( pinLength === 4 || pinLength === 6) {
      return true
    }
  }
  return false;
}

// BEST WAY
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
```

## filter string to return only letter chars
```javascript 
const lettersOnly = str.split('').filter(char => /[a-zA-Z]/.test(char));
```




