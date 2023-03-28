
### Convention naming
const variables = UPPERCASE_UNDERSCORE

**shadowing**
redeclairing variable later in code
-Rust uses second call of the variable 
fn main() {
    let x = 5;

    let x = x + 1;
    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
The value of x in the inner scope is: 12
The value of x is: 6

## Data Types
**Scalar** - single value
- integers
- floating-point
- numbers
- booleans
- characters

**integers**
 Signed and unsigned refer to whether it’s possible for the number to be negative

|Length |	Signed	| Unsigned| chars |
|--------| ------- | ------- | ----- |
|  8-bit |    i8   |   u8    | 255 |
|16-bit |	i16	| u16| 
|32-bit	| i32	| u32|
|64-bit	| i64	| u64|
|128-bit	| i128	| u128|
|arch |	isize	| usize|

--release tag causes integer overflow to wrap back at start of number type eg: 256 for u8 starts back at 0;

To explicitly handle the possibility of overflow, you can use these families of methods provided by the standard library for primitive numeric types:

   - Wrap in all modes with the wrapping_* methods, such as wrapping_add.
   - Return the None value if there is overflow with the checked_* methods.
   - Return the value and a boolean indicating whether there was overflow with the overflowing_* methods.
   - Saturate at the value’s minimum or maximum values with the saturating_* methods.


### Numeric Operations
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;
    let truncated = -5 / 3; // Results in -1

    // remainder
    let remainder = 43 % 5;

### Charactor Type
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';

- Char literals use **single** quotes
  - 4 bytes - wide range of things can use as a 'char'
- String literals use **double** quotes

### Tuple
- general way of grouping a num of values
- fixed length
  - cannot grow or shrink once delared

```rust
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {y}");

// ALSO can access with '.'
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
```

### Array 
- values must all have same type
- MUST have **FIXED** length
```rust
   let a = [1, 2, 3, 4, 5];
```
**If you’re unsure whether to use an array or a vector, chances are you should use a vector.**

- You write an array’s type using square brackets with the type of each element, a semicolon, and then the number of elements in the array, like so:
```rust
  let a: [i32; 5] = [1, 2, 3, 4, 5];
```
- can also initialize with all same value
```rust
  let a: [3; 5]
  = [3, 3, 3, 3, 3]
```
- access elements 
  - let first = a[0]



## Functions

