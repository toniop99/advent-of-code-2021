const data = require('./input')

function calculatePowerConsumtionSubmarine (data) {
  let max = ''
  let min = ''
  const binaryNumberLength = data[0].length
  const mostCommonNumbers = Array(binaryNumberLength).fill(0)

  data.forEach(element => {
    for (let i = 0; i < binaryNumberLength; i++) {
      const currentBit = +element[i]

      currentBit === 0 ? mostCommonNumbers[i]-- : mostCommonNumbers[i]++
    }
  })

  mostCommonNumbers.forEach(bit => {
    if (bit < 0) {
      max += '1'
      min += '0'
    } else {
      max += '0'
      min += '1'
    }
  })

  const gamma = parseInt(max, 2)
  const epsilon = parseInt(min, 2)

  return gamma * epsilon
}

console.log(calculatePowerConsumtionSubmarine(data))

module.exports = calculatePowerConsumtionSubmarine
