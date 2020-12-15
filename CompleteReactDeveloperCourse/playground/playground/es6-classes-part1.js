class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting () {
    return `Hello, I am ${this.name}!`
  }

  getDescription () {
    if (this.age !== 0) {
      return `Hello, I am ${this.name}!  I am ${this.age} years old`
    } else {
      return `Hello, I am ${this.name}!`
    }
  }
}

const me = new Person('Martin Dwyer', 58)
const rose = new Person('Rose Dwyer')
const anon = new Person()

console.log(me)
console.log(rose)
console.log(anon)

console.log(me.getGreeting())

console.log(me.getDescription())

console.log(rose.getDescription())
