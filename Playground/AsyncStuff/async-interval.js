const asyncInterval = period => {
  let i = 0
  const testInterval = time => {
    if (i < period) {
      return true
    } else {
      return false
    }
  }
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      console.log(testInterval(i))
      i++
      if (!testInterval(i)) {
        resolve(period)
        clearInterval(interval)
      }
    }, 1000)
  })
}

let a = 2

console.log(a)

let b = asyncInterval(4).then(resolve => {
  return resolve
})

console.log(a + b)
