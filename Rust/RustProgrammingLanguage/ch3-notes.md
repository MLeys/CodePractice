
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


|Length |	Signed	| Unsigned
|8-bit |	i8	| u8
|16-bit |	i16	| u16
|32-bit	| i32	| u32
|64-bit	| i64	| u64
|128-bit	| i128	| u128
|arch |	isize	| usize