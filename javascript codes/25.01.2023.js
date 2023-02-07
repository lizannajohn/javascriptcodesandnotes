// this: current context

// let obj =
// {
//     name: "el",
//     age: 23,
//     display: function() {console.log(this.name)} //this refers to the current object
// }

// obj.display()


// within an object:
// for a normal function, this means current cocntext
// for an arrow function, this means undefined

// call, bind, apply
// Call means calling a function immediately

// let obj1 =
// {
//     name: "eliza",
//     age: 23
// }

// function display(a, b)
// {
//     console.log(a,b, this.name)
// }

// display.call(obj1, 10, 20);

// // Apply: parameters to be passed in form of array
// display.apply(null, [10, 20])

// Bind: call it later by binding it to another object
let obj2 =
{
    name: "eliza",
    age: 23,
    display: function()
    {
        console.log(this.name);
    }
}

let obj3 = obj2.display
// obj3() //obj2 is not a function
// obj2 and obj3 are two different objects

obj3.bind(obj2)()