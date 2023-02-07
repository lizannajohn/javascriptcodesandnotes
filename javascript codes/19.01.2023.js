// Closures
function sum(a)
{
    // a = 10
    console.log("Sum");

    function sumAgain(b)
    {
        // b = 20
        console.log(a + b);
    }

    return sumAgain
}

let x = sum(10)
x(20) //output: 30

// Closure: the child function will always remember every activity the parent has carried out and
// have access to all the variables within parent even though the execution has been completed long ago

function makeCounter()
{
    let count = 0
    return function()
    {
        return count++
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let arr = []
for(let i = 0; i < 5; i++)
{
    arr.push(
        function()
        {
            return i
        }
    );
}

console.log(arr[1]()); //1
console.log(arr[3]()); //3

// Hoisting
// only variable declaration moves to the top, not the value

// is var hoisted? YES
// is let/const hoisted? YES -> but why? 
// TDZ - Temporal Dead Zone: has region and time -> only applies to vars declared using let and const

function print()            //temporal dead zone starts
{                           // tdz continues
    function log()          // tdz continues
    {                       // tdz continues
        console.log(age);   // tdz continues
    }                       // tdz continues
                            // tdz continues
    // log();               // tdz continues -> if log is called within tdz it will show error
    const age = 20;         // tdz deactivates as soon as variable is found -> it goes only to the top of the nearest function, not to the top of the .js file
    log();
}

print();

let obj = 
{
    a: 1,
    b: 2,
    c: {x: 10, y: 20}
}

let obj1 = obj
// obj.a = 100
// obj1.b = 200;

console.log(obj);
console.log(obj1);

// Spread operator for copying values
let obj2 = {...obj}
// Object.assign(obj2, obj) ->  alternate to spread operate
obj2.b = 200

obj.c.x = 1000
obj2.c.y = 2000

console.log(obj2);

let obj3 = structuredClone(obj) //deep copy
obj.c.x = 1500
obj3.c.y = 2500

console.log(obj3);