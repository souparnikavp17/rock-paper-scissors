let cs = 0
let hs = 0
let flag=true

function getComputerChoice() {
    let ch = Math.floor(Math.random() * 3)
    if (ch === 0) {
        return "rock"
    } else if (ch == 1) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    let ch = prompt("Enter rock, paper or scissor: ")
    ch = ch.toLowerCase()
    return ch
}



function playRound(hch) {

    if(!flag){
        return 0
    }

    let cch = getComputerChoice()

    let who = document.querySelector(".whowon")



    if (cch === hch) {
        who.textContent = "Its a tie!! Computer also chose the same"

    }
    else if (cch === "rock") {
        if (hch === "paper") {
            who.textContent = "You win!! Computer chose rock"
            hs++

        } else if (hch === "scissor") {
            who.textContent = "Sorry, you lose. Computer chose rock"
            cs++

        }
    } else if (cch === "paper") {

        if (hch === "scissor") {
            who.textContent = "You win!! Computer chose paper"
            hs++


        } else if (hch === "rock") {
            who.textContent = "Sorry, you lose. Computer chose paper"
            cs++

        }

    } else if (cch === "scissor") {

        if (hch === "rock") {
            who.textContent = "You win!! Computer chose scissors"
            hs++


        } else if (hch === "paper") {
            who.textContent = "Sorry, you lose. Computer chose scissors"
            cs++

        }
    }

    let humanScore = document.querySelector(".humanScore")
    let compScore = document.querySelector(".compScore")
    humanScore.textContent = hs
    compScore.textContent = cs

    

    if (hs === 5) {
        who.textContent = "CONGRAGULATIONS!! YOU WON THIS ROUND!!"
        flag=false
    } else if (cs === 5) {
        who.textContent = "COMPUTER WON THIS ROUND!!"
        flag=false
    }
}


let rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
    playRound("rock")
})


let paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
    playRound("paper")
})

let scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    playRound("scissor")
})


document.querySelector("#restart").addEventListener("click",()=>{
    hs=0
    cs=0
    flag=true
    document.querySelector(".whowon").textContent=""
    let humanScore = document.querySelector(".humanScore")
    let compScore = document.querySelector(".compScore")
    humanScore.textContent = hs
    compScore.textContent = cs
})