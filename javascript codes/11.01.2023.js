(function(a, b)
{
    return(a + b)
})(10,20)

(function(a, b)
{
    return(a + b)
})(10,20)

// let and const
const c = 10
// c = 13 // will throw error as const cannot be reinitialized

// Removing elements from array
// let arr = [10 billion elements]
// can be removed by reinitialization
// arr = []

// const arr = [10 billion elements]
// elements can be removed by setting the array length
// arr.length = 1 || 0

// try and catch
try
{
    let a = 10
    let b
    console.log("Before error");
    console.log(c);
    console.log("After error");
}
catch(err)
{
    console.log("Error found");
}

let p = 10
let q
console.log("A");
try
{
    let x = 12
    console.log(x);
}
catch(err)
{
    console.log("B");
}
finally
{
    console.log("Final Destination");
}
console.log("C");

/* 
try
{
    console.log(a);
}
catch(e)
{
    // console.log(e.name) -> ReferenceError -> type of error
    // console.log(e.message) -> error message
    // console.log(e.stack); -> the whole error stack
} 
*/

// Arrays
// Array Destructuring
let arr = [10, 20, 30, 40, 50]
let [d, e, f] = arr
console.log(d, e, f);
// let [d,,f] = arr
// console.log(d, f);

// Object Destructuring
let obj =
{
    name: "Elizabeth",
    age: 23,
    address: "Canada"
}

let {name:a, address:b, age:g} = obj
console.log(a, b, d);

// Array Iterators
// datatype of array is object
// for-of loop
for(let x of arr)
{
    console.log(x);
}

let voters =
[
  {name: "Elizabeth", age: 23},
  {name: "Anna", age: 17},
  {name: "John", age: 30}
]

for(let x of voters)
{
  if(x.age >= 18)
  {
    console.log(x.name)
  }
}