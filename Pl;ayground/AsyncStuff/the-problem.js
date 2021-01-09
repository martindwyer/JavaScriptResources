doNext = i => {
  return 5 + i
}

pause = (timeLength, _doNext) => {
  let i = 0
  let myInterval = setInterval(() => {
    i++
    console.log(i)
    if (i === timeLength) {
      clearInterval(myInterval)
      return sum(5, i)
    }
  }, 1000)
}

timeOut = () => {
  let a = 5
  let b = 5
  let c = 0
  setTimeout(() => {
    c = sum(a, b)
    return c
  }, 2000)
}

sum = (a, b) => {
  return a + b
}

console.log(timeOut())

//console.log(pause(4))
