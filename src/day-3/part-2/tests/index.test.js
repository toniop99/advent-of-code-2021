const calculatePowerConsumtionSubmarine = require('../src/index')

test('Life support rating of submarine must be 230', () => {
  const testData = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010'
  ]

  expect(calculatePowerConsumtionSubmarine(testData)).toBe(230)
})
