const data = require('./input')

function countIncreasesInRangeOfThree (data) {
  const dataLength = data.length
  let totalIncreases = 0
  let previousSum = null

  for (let i = 0; i < dataLength; i++) {
    let currentSum = null
    if (i <= dataLength - 3) {
      currentSum = +data[i] + +data[i + 1] + +data[i + 2]
    }

    if (!currentSum) {
      break
    }

    if (previousSum && currentSum > previousSum) {
      totalIncreases += 1
    }

    previousSum = currentSum
  }

  return totalIncreases
}

console.log(countIncreasesInRangeOfThree(data))

module.exports = countIncreasesInRangeOfThree
