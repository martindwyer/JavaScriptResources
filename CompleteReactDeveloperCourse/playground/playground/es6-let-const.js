// var, const, and let are function scoped
// const and let are block level scoped (like for and if statements)

var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Mikey'
nameLet = 'Mike'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName () {
  var petName = 'Hal'
  return petName
}

// does not print for const console.log(petName)

var fullName = 'Martin Dwyer'

if (fullName) {
  var firstName = fullName.split(' ')[0]
  console.log('firstName', firstName)
}

// prints for var declaration only console.log('firstName', firstName)
