console.log("hello");

let a = 10
let b = '20'
// JavaScript does some conversion: cohersion -> converted number to string
console.log(a+b); //output is 1020 -> concat
console.log(typeof(a+b)); //string
console.log(a + Number(b)); //o/p is 30 -> '20' is explicitly typecasted as a number
console.log(a - b); //o/p: -10

let c = 20
let d = 'one'
console.log(c - d); //NaN

function sum(a, b)
{
    return a + b
}

sum(4, 5)
console.log(sum(4,5))

// function expression
let subtract = function sub(a, b)
{
    let sub = a - b
    return sub
}

console.log(subtract(5,7))

let marks = [90, "abc", 55, 78, true]
console.log(marks);
console.log(marks[0]);

marks[0] = 100
console.log(marks[0]);
// console.log(marks);

// marks[30] = 150
// console.log(marks);

// adds to array from end
marks.push(99)
console.log(marks);

// adds to array from front
marks.unshift(15)
console.log(marks);

// Removing from end
marks.pop()
console.log(marks);

// Removing from start
marks.shift()
console.log(marks);

let obj = 
{
    name: "liz",
    age: 20,
    lname: "john",
    study: function ()
    {
        console.log("studying")
    }
}
console.log(obj.name);
obj.study()

// console.log within a console.log gives undefined

// 