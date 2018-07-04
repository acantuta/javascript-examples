// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(4)

console.log(value)
console.log(otherValue)

let convertFahrenheitToCelsius = function (degreesFahrenheit) {
    let degreesCelsius = (degreesFahrenheit - 32) * 5 / 9;
    return degreesCelsius
}

let value1 = convertFahrenheitToCelsius(32)
let value2 = convertFahrenheitToCelsius(68)

console.log(value1)
console.log(value2)