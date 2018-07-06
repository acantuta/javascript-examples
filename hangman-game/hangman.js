const Hangman = function (word, remainingGuesses) {
    this.word = word.split('')   
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    
    this.statuses = {
        playing: 'playing',
        failed: 'failed',
        finished: 'finished'
    }

    this.status = this.statuses.playing
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === " ") {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })

    if (this.remainingGuesses === 0) {
        this.status = this.statuses.failed
    } else if (finished) {
        this.status = this.statuses.finished
    } else {
        this.status = this.statuses.playing
    }
}
