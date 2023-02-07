// BigInt: 2^53-1
let n = 2.9776931348623157e+308
console.log(n);

let x = 1234567n
console.log(x, typeof x);

// BigInt can be +ve, -ve but not decimal

// Arithmetic and Relational Operators
    // all operators work same except / operator

let a = 28n, b = 5n
let c = a + b
let d = a/b //5.6 but it will only display 5n
console.log(c, typeof c);
console.log(d, typeof d);

// Only bigint based values can be used. both operands should be bigint
// cannot mix and match

let e = Number("12345")
let f = +("12345") //unary plus -> shortcut for typecasting to Number
// unary plus does not work with bigint but Number does

// parseInt, parseFloat: will help in base conversion
// parseFloat: has all the features of number and a few more
let g = "1234.56"
console.log(parseInt(g)); //1234 -> ignores numbers after the decimal
console.log(parseFloat(g)); //will display the whole number

let h = 0, i = 0n
console.log(h == i); //true
console.log(h === i); //false

// Symbols: symbol values cannot be accessed
    // Features of Symbol
        // No symbol value is revealed
        // All symbol values will be different
let s = Symbol()
console.log(s);

let s1 = Symbol()
console.log(s1);
console.log(s == s1); //always false

let sports = "swimming"
let obj =
{
    name: "El",
    age: 23,
    [sports]: "I like to swim" //computed value is put in []
}
console.log(obj);

let s2 = Symbol()
const obj1 =
{
    name: "Elizabeth",
    [s2]: "I am a symbol",
    age: 23
}

console.log(obj1);
obj1[s2] = "i am a changed symbol"
console.log(obj1);