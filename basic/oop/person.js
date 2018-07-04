const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    output = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
        output += ` ${this.firstName}  likes ${like}`
    })

    return output
}

Person.prototype.setFullName = function (fullname) {
    const names = fullname.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}

Person.prototype.description = 'This is a description'

const me = new Person('Anthony', 'Cantuta', 29, ['teaching', 'music'])
const you = new Person('Max', 'Cantuta', 15, ['Play guitar', 'Play games'])
me.setFullName("Roger Cantuta")

console.log(me)
console.log(you)
console.log(me.__proto__.__proto__)
