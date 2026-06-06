let cs = 0
let hs = 0


function getComputerChoice() {
    let ch = Math.floor(Math.random() * 3)
    if (ch === 0) {
        return "rock"
    } else if (ch == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let ch = prompt("Enter rock, paper or scissor: ")
    ch=ch.toLowerCase()
    return ch
}

function showScore(){
    alert("Current score:" +"\nHuman: "+hs +"\nComputer: "+cs)
}



while (cs < 5 && hs < 5) {

    let hch = getHumanChoice()
    let cch = getComputerChoice()

    if (cch === hch) {
        alert("Its a tie!! Computer also chose the same")
        showScore()
    }

    else if (cch === "rock") {
        if (hch === "paper") {
            alert("You win!! Computer chose rock")
            hs++
            showScore()
        } else if (hch === "scissor") {
            alert("Sorry, you lose. Computer chose rock")
            cs++
            showScore()
        }
    } else if (cch === "paper") {

        if (hch === "scissor") {
            alert("You win!! Computer chose paper")
            hs++
            showScore()

        } else if (hch === "rock") {
            alert("Sorry, you lose. Computer chose paper")
            cs++
            showScore()
        }

    } else if (cch === "scissor") {

        if (hch === "rock") {
            alert("You win!! Computer chose scissors")
            hs++
            showScore()

        } else if (hch === "paper") {
            alert("Sorry, you lose. Computer chose scissors")
            cs++
            showScore()
        }
    }
}

if(hs===5){
    alert("CONGRAGULATIONS!! YOU WON THIS ROUND!!")
}else if(cs===5){
    alert("COMPUTER WON THIS ROUND!!")
}

