const data = require('./input')

function driveSubmarine (data) {
  let aim = 0
  let xPosition = 0
  let yPosition = 0

  data.forEach(movement => {
    const [rule, quantity] = movement.split(' ')

    if (rule === 'forward') {
      xPosition += +quantity
      yPosition += aim * +quantity
    } else if (rule === 'down') {
      aim += +quantity
    } else {
      aim -= +quantity
    }
  })

  return xPosition * yPosition
}

console.log(driveSubmarine(data))

module.exports = driveSubmarine
