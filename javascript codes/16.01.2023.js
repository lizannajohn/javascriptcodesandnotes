// Strings
// Closures

let str = "Hello World"
let str1 = 'A'
let str2 = `Tilde`

// Benefit of tilde
let a = 2, b = 3;
let sum = a + b;

console.log(`sum of ${a} and ${b} is ${sum}`)

// Adding slashes to strings to continue in different lines
let statement = "Hello World \
how are you \
doing today";

// Not needed for slashes when using tilde
let st2 = `how	
are    
you    
doing    
today`;

let lName = "Kumar"
let fName = `Ramesh ${lName}`
console.log(fName);

// Operators in String
let c = '20'
let d = '10'
let e = c + d
console.log(e, typeof e);

let s1 = "mohan"
let s2 = "ram"
let s3 = s1 - s2
console.log(s3); //Returns NaN

let s4 = '20'
let s5 = '10'
let s6 = s4 - s5
console.log(s6, typeof s6); //NaN, number

// typeof NaN is number

// String Functions
let s = "Elizabeth"
console.log(s.length);
console.log(s.charAt(3));
// console.log(s.charAt(100)); //Returns empty space
console.log(s[4]); //alternative to s.charAt()
console.log(s[100]); //returns undefined
console.log(s[s.length - 1]); //returns last character

// Mutable and Immutable String
// Mutable: can be changed and immutable: cannot be changed
let word = "hello"
// word[0] = "p" //not possible to change a string
console.log(word.toUpperCase);

// let name = "Elizabeth"
// Negative indexing: allowed by slice
console.log(s.slice(-8, -5));
// mixing both negative and positive indexing
console.log(s.slice(4, -2));
console.log(s.slice(-9, 5));

// substr: also allows negative indexing
console.log(s.substr(1, 4));
console.log(s.substr(-4, 4));

// indexOf, lastIndexOf
// indexOf - case sensitive
console.log(s.indexOf('e'));

let s9 = "onomatoepia"
console.log(s9.indexOf('o', 4));
console.log(s9.lastIndexOf('o', 5));