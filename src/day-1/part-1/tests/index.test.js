const countIncreases = require('../src/index')

test('depth count must be 7', () => {
  const testData = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
  ]

  expect(countIncreases(testData)).toBe(7)
})
