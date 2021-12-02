const data = require('./input')

function driveSubmarine (data) {
  let xPosition = 0
  let yPosition = 0

  data.forEach(movement => {
    const [rule, quantity] = movement.split(' ')

    if (rule === 'forward') {
      xPosition += +quantity
    } else if (rule === 'down') {
      yPosition += +quantity
    } else {
      yPosition -= +quantity
    }
  })

  return xPosition * yPosition
}

console.log(driveSubmarine(data))

module.exports = driveSubmarine
