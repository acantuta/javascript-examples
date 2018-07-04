let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 238
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);

let person = {
    name: 'Anthony',
    age: '29',
    location: 'Perú'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age - 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
