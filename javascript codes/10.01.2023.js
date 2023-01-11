// Types of Functions: Syntaxes

// normal function
function sum(a = 0, b = 1) //a = 0, b = 1 are default values in case values are not giving during function call
{
    console.log(a + b)
}

// default values can be defined as such too: 
// function sum(a, b)
// {
//     if(b == undefined)
//     {
//         b = 1
//     }
//     OR
//     b = b || 0
//     console.log(a + b)
// }

// giving less values will give an error, thus default value can be provided
// sum(10)

// function expression
let sum1 = function(a, b)
{
    console.log(a + b);
}

// arrow functions: used mostly in React and Node
// name of function (LHS) = value of function (RHS)
let sum2 = (a, b) =>
{
    console.log(a + b);
}

// all numbers are considered as true except 0, so are all strings
// 0, "" (empty string) false, null and undefined are false

let arr = [10, 20, 30, 40, 50]

// not an efficient method of copying values to another array
// arr1 = arr

// correct way of copying
// for(let i = 0; i < arr.length; i++)
// {
//     arr1[i] = arr[i]
// }

// another way: spread operator
// arr1 = [...arr]

// changes in one array will reflect in all: called shallowCopy
// arr[0] = 100
// arr1[1] = 200

// console.log(arr)
// console.log(arr1);

// REST Operator: rest operator has to be the last argument always
// function asum(a, ...x)
// {
//     console.log(a, x);
// }

// asum(10, 20, 40, 60)
// asum(1, 2, 3, 4, 8)

// Scope and Hoisting
// console.log(a);
// let a = 10 // 'a' cannot be accessed before initialization -> when a is 'let'
// 'a' is undefined when'var' is used

// let x = 15 // this is a global variable

// if(10 > 5)
// {
//     let y = 5 //this is a local variable
//     console.log(x)
//     console.log(y)
// }

// console.log(x);
// console.log(y); displays error because 'y' is not available on global scope level

// for(let i = 0; i <= 0; i++)
// {
//     console.log("inside top: ", x);
//     let x = 50;
//     console.log("inside bottom: ", x);
// }

// anything declared using var is moved to the top and declared as global variable

// Function Scope

heyo()

function heyo()
{
    let c = 10 //follows block scope
    var d = 20 //follows function scope: var is global except in case of functions
    e = 30 // global scope -> if no datatype is given, JS declares it as var and hoists it to the top
}

// heyo()