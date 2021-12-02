const driveSubmarine = require('../src/index')

test('Position of submarine must be 900', () => {
  const testData = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
  ]

  expect(driveSubmarine(testData)).toBe(900)
})
