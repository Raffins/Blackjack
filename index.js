
let cards = []
let sum = 0
let isAlive= false
let hasBlackjack= false
let message = ""
let messageEl = document.getElementById("message-el")
// let scoreEl = document.getElementById("score")
let scoreEl = document.querySelector("#score")
let cardsEl = document.querySelector("#cards")


let player = {
    name : "Rafin",
    chip : 150
}


let playersData = document.getElementById("playerData")
playersData.textContent = player.name + ": $" + player.chip 
 

function getRandomCard(){
    let randonNumber = Math.floor(Math.random()*13)+1
    if (randonNumber > 10){
        return 10
    }else if (randonNumber === 1 ){
        return 11
    }else{
        return randonNumber
    }    
}





function startGame() {
    isAlive= true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard ]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length ; i++){
          cardsEl.textContent += cards[i] + " "
     }
     scoreEl.textContent = "Sum: " + sum
     
        if(sum <= 20){
    
        message = "Do you want to draw a new card ? "
    } else if (sum === 21){
        
        message="wohoo !!! Black Jack "
        hasBlackjack= true
    }else{
        
        message="You Loose "
        isAlive=false
    }
    
    messageEl.textContent = message
   }


function newCard() {
    if(isAlive===true && hasBlackjack === false){
    
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        
        sum += cards[2]
        
        renderGame()
    }
} 
    