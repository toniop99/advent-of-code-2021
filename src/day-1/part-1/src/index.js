const data = require('./input')

function countIncreases (data) {
  let totalIncreases = 0
  let lastDepth

  data.forEach(line => {
    const depth = Number(line)
    if (lastDepth !== undefined && lastDepth < depth) {
      totalIncreases += 1
    }
    lastDepth = depth
  })

  return totalIncreases
}

console.log(countIncreases(data))

module.exports = countIncreases
