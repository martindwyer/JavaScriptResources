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

class Student extends Person {
  constructor (name, age, major = 'undecided') {
    super(name, age)
    this.major = major
  }

  hasMajor () {
    return this.major !== 'undecided'
  }

  getDescription () {
    if (this.major !== 'undecided') {
      if (this.age !== 0) {
        return `Hello, I am ${this.name}!  I am ${this.age} years old and my major is ${this.major}`
      } else {
        return `Hello, I am ${this.name} and my major is ${this.major}`
      }
    } else {
      if (this.age !== 0) {
        return `Hello, I am ${this.name}!  I am ${this.age} years old`
      } else {
        return `Hello, I am ${this.name}`
      }
    }
  }
}

const me = new Person('Martin Dwyer', 58)
const rose = new Person('Rose Dwyer')
const anon = new Person()

const student = new Student('Pete', 28, 'Computer Science')
const student2 = new Student('Joe', 24)

console.log(me)
console.log(rose)
console.log(anon)
console.log(student)
console.log(student.hasMajor())
console.log(student.getDescription())
console.log(student2)
console.log(student2.hasMajor())
console.log(student2.getDescription())

class Traveler extends Person {
  constructor (name, age, location) {
    super(name, age)
    this.location = location
  }

  getGreeting () {
    if (this.location) {
      return `Hello I am ${this.name} and I am visiting from ${this.location}`
    } else {
      return `Hello I am ${this.name}`
    }
  }
}

const trav = new Traveler('Travis', 42, 'Chicago')
console.log(trav.getGreeting())

const trev = new Traveler('Trevor', 38)
console.log(trev.getGreeting())
