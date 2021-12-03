const data = require('./input')

function calculatePowerConsumtionSubmarine (data) {
  const binaryNumberLength = data[0].length
  let searchMostCommon = data
  let searchLessCommon = data

  for (let i = 0; i < binaryNumberLength; i++) {
    let mostCommonIBit = 0

    searchMostCommon.forEach(element => {
      const currentBit = +element[i]

      currentBit === 0 ? mostCommonIBit-- : mostCommonIBit++
    })

    if (searchMostCommon.length > 1) {
      if (mostCommonIBit < 0) { // most common is 0
        searchMostCommon = searchMostCommon.filter(element => element[i] === '0')
      } else {
        searchMostCommon = searchMostCommon.filter(element => element[i] === '1')
      }
    }

    mostCommonIBit = 0

    searchLessCommon.forEach(element => {
      const currentBit = +element[i]

      currentBit === 0 ? mostCommonIBit-- : mostCommonIBit++
    })

    if (searchLessCommon.length > 1) {
      if (mostCommonIBit > 0 || mostCommonIBit === 0) { // most common is 1
        searchLessCommon = searchLessCommon.filter(element => element[i] === '0')
      } else {
        searchLessCommon = searchLessCommon.filter(element => element[i] === '1')
      }
    }
  }

  return parseInt(searchMostCommon[0], 2) * parseInt(searchLessCommon[0], 2)
}

console.log(calculatePowerConsumtionSubmarine(data))

module.exports = calculatePowerConsumtionSubmarine
