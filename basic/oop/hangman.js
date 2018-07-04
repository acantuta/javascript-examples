const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    let numberOfLettersForHiding = 4
    let  = 0
    this.word.forEach((letter) => {
        let hide = Math.random() >= 0.5

        if (hide && numberOfLettersForHiding > 0) {
            puzzle += '*'
            numberOfLettersForHiding--

        } else {
            puzzle += letter
        }
    })

    return puzzle
}

const game1 = new Hangman('Anthony cantuta Jorge', 2)
console.log(game1.getPuzzle())