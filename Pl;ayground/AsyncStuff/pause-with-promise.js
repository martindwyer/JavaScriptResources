pause = timeLength => {
  let i = 0

  let myInterval = setInterval(() => {
    i++
    console.log(i)
    if (i >= timeLength) {
      clearInterval(myInterval)
      return new Promise((resolve, reject) => {
        resolve('Well done!')
      })
    }
  }, 1000)
}

let pr = pause(5)
console.log('before pause')

pr.then(data => {
  console.log(data)
})

console.log('after pause')
