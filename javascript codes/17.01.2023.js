let obj =
{
    a: 1, 
    b:true,
    20: "hello",  
    c: "apple",
    // you don't have to use double quotes when declaring keys
    // but if you have more than one word, you need to enclose them in " "
    "hello you": 4,
    true: 100,
    10: 200
}
// All integer type keys are brought to the top and displayed in order,
// and other keys are displayed in order of creation
console.log(obj)

let obj2 =
{
    a: 1,
    b: 2,
    c: 3,
    10: 100,
    "hey you": 4
}

let t = "b"
// console.log(obj.b) error

// array syntax of displaying
// console.log(obj2[t]); //same as console.log(obj2["b"])

// with integers
console.log(obj[10]);
console.log(obj["10"]);

// for in loop:
for(let t in obj2)
{
    console.log(t, obj[t]);
}

// Arrays
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


let obj3 = 
{
    a: 1,
    b: 3,
    c: 5
}

// Adding values
obj3.a = 10

obj3["hello ya"] = 100

console.log(obj3);

// Creating bat and ball
let bat =
{
    "height": 3,
    "weight": 200
}

let ball =
{
    "color": "red",
    "shape": "circle"
}

let cricket =
{
    
}

for(let t1 in bat)
{
    cricket[t1] = bat[t1]

}

for(let t2 in ball)
{
    cricket[t2] = ball[t2]
}

console.log(cricket);