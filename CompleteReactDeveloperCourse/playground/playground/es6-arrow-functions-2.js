// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //  console.log(arguments)
  return a + b
}

console.log(add(55, 1, 1000))

// this keyword - no longer bound with arrow functions

// const user = {
//   name: 'Martin',
//   cities: ['Peoria', 'West Palm Beach'],
//   printPlacesLived: function () {
//     console.log(this.name)
//     console.log(this.cities)
//     const that = this
//     this.cities.forEach(function (city) {
//       console.log(that.name + ' has lived in ' + city)
//     })
//   }
// }

const user = {
  name: 'Martin',
  cities: ['Peoria', 'West Palm Beach'],
  // note the changes to the function defn
  printPlacesLived () {
    return this.cities.map(city => this.name + ' has lived in ' + city + '!')
    // note the arrow function below
    // this.cities.forEach(city => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
    // return cityMessages
  }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply () {
    return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
