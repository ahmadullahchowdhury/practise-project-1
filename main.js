console.log("connected")

const inputElm = document.querySelector("#input")
const formElm = document.querySelector("form")
const winingScoreElm = document.querySelector(".winScore")

let winScore = 30

formElm.addEventListener('submit', e => {
    e.preventDefault()
    winScore = +inputElm.value
    winingScoreElm.textContent = winScore
    inputElm.value = ''
})

