let score = document.querySelector('.score')
let gamescreen = document.querySelector('.game')
let startscreen = document.querySelector('.startscreen')

startscreen.addEventListener("click", startGame)

document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

function keyPressed(event)
{
    console.log(event.key);
    console.log("key pressed");
}
function keyReleased(event)
{
    console.log(event.key);
    console.log("key released");
}

function startGame()
{

}