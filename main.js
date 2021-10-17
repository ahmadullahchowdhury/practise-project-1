console.log("connected")

const inputElm = document.querySelector("#input")
const formElm = document.querySelector("form")
const winingScoreElm = document.querySelector(".winScore")

const p1ScoreElm = document.querySelector(".p1Score")
const p2ScoreElm = document.querySelector(".p2Score")
const p1BtnElm = document.querySelector(".p1Btn")
const p2BtnElm = document.querySelector(".p2Btn")
const resetElm = document.querySelector(".reset")

let winScore = "Please enter a Score to start the game"
let p1Score = 0
let p2Score = 0

winingScoreElm.textContent = winScore
p1ScoreElm.textContent = p1Score
p2ScoreElm.textContent = p2Score
turn = ' player-1 || player-1'

p1BtnElm.setAttribute('disabled', 'disabled')
p2BtnElm.setAttribute('disabled', 'disabled')

formElm.addEventListener('submit', e => {
    const  inputValue = +inputElm.value
    e.preventDefault()
    if(inputValue === '' || inputValue < 1 ){
        if(!document.querySelector('.inval-input')){
            formElm.insertAdjacentHTML('beforebegin','<p class = "inval-input"> Please enter valid number</p>')
        }
    }else {
        if(document.querySelector('.inval-input')){
            document.querySelector('.inval-input').remove()
        }
    winScore = +inputElm.value
    winingScoreElm.textContent = winScore
    inputElm.value = ''
    initStage()
    }
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')
})

p1BtnElm.addEventListener('click', e => {
    if (turn) {
        p1Score = p1Score + genRanNum(5)
        p1ScoreElm.textContent = p1Score
        turn = 'player-2'
        p1BtnElm.setAttribute('disabled', 'disabled')
        p2BtnElm.removeAttribute('disabled')
    }
    checkWinner()

})

//checking who is winner
function checkWinner() {
    const p1Winscore = winScore === p1Score
    const p2Winscore = winScore === p2Score
    if (p1Winscore || p2Winscore) {
        p1BtnElm.setAttribute('disabled', 'disabled')
        p2BtnElm.setAttribute('disabled', 'disabled')
    }
    displayWinner(p1Winscore, p2Winscore)
}

function displayWinner(p1, p2) {
    if (p1) {
        formElm.insertAdjacentHTML('beforebegin', '<p class = "winMsg" >Player 1 is winner</p>')
    } else if (p2) {
        formElm.insertAdjacentHTML('beforebegin', '<p class = "winMsg" >Player 2 is winner</p>')
    }
}


p2BtnElm.addEventListener('click', e => {
    if (turn) {
        p2Score = p2Score + genRanNum(5)
        p2ScoreElm.textContent = p2Score
        turn = 'player-1'
        p2BtnElm.setAttribute('disabled', 'disabled')
        p1BtnElm.removeAttribute('disabled')
    }
    checkWinner()
})

resetElm.addEventListener('click', e => {
    winScore = "Please enter a Score to start the game"
    initStage()
})

function initStage(){
    p1Score = 0
    p2Score = 0
    turn = 'player-1'
    winingScoreElm.textContent = winScore
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    p1BtnElm.setAttribute('disabled', 'disabled')
    p2BtnElm.setAttribute('disabled', 'disabled')

    if(document.querySelector('.winMsg')){
        document.querySelector('.winMsg').remove()
    }
}

function genRanNum(max){
   return Math.floor(Math.random() * max + 1 )
}