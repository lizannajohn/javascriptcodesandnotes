// function increment()
// {
//     let counter = document.getElementsByTagName('span')[0];
//     let value = counter.innerHTML
//     ++value
//     counter.innerHTML = value
// }

function increment()
{
    let counter = document.getElementsByTagName('input')[0];
    let val = counter.value //alternative of using innerHTML -> .value is used especially in forms
    ++val
    counter.value = val
}