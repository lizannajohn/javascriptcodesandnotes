let playerName = document.querySelectorAll("input")
let btns = document.getElementsByClassName("diceRollBtn")
let scores = document.getElementsByTagName("span")
let winnerBtn = document.getElementById("winner")+

for(let i = 0; i <= btns.length - 1; i++)
{
    btns[i].addEventListener("click", () => {rollDice(btns[i].id)})
}

function rollDice(btn_id)
{
    btns[btn_id].disabled = true

    let dice = ["1", "2", "3", "4", "5", "6"]
    let randomIndex = Math.floor(Math.random() * 6)
    let randomValue = dice[randomIndex]
    scores[btn_id].innerText = randomValue
}



// winnerBtn.addEventListener("click", () => {declareWinner})