const theHangman = new Hangman('cantuta', 5)
const puzzleEl = document.querySelector("#puzzle")
const remainingGuessesEl = document.querySelector("#remainingGuesses")
const statusEl = document.querySelector("#status")

const drawGame = function () {
    puzzleEl.textContent = theHangman.getPuzzle()
    remainingGuessesEl.textContent = theHangman.remainingGuesses
    statusEl.textContent = theHangman.status
}

const setGlobalEvents = function () {
    window.addEventListener("keypress", (e) => {
        let letter = String.fromCharCode(e.keyCode)
        theHangman.makeGuess(letter)
        drawGame()
    })
}

const init = function () {
    drawGame()
    setGlobalEvents()
}

init()

