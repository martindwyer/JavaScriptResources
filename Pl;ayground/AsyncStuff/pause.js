pause = timeLength => {
  let i = 0

  let myInterval = setInterval(() => {
    i++
    console.log(i)
    if (i >= timeLength) {
      clearInterval(myInterval)
    }
  }, 1000)
}

console.log('before pause')
pause(5)
console.log('after pause')
