// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 15, 2)

console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' Score:' + score
}

let scoreText = getScoreText(undefined, 11)
console.log(scoreText)

// calculating tip
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip1 = getTip(100, .25)
console.log(tip1)

