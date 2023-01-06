// DOM Manipulation
let el1 = document.getElementById('heading')
let el2 = document.getElementsByClassName('heading2')
let el3 = document.getElementsByTagName('h1')

console.log(el1);
console.log(el2[0]);
console.log(el2[1]);

console.log(el3[0]); 
/* output: <h1> 06.01.2023</h1>
opening tag + content + closing tag = html element */

// To display just the text within element tags
console.log(el1.innerHTML);

// To modify content within element tags
// innerHTML is not a method, it is a property
    // innerHTML returns any other html element tags within
el1.innerHTML = "DOM Manipulation: Using JS"
// innerText returns only the text
// textContent: to return text along with any formatting
