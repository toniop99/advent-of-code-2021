const countIncreasesInRangeOfThree = require('../src/index')

test('depth count must be 5', () => {
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

  expect(countIncreasesInRangeOfThree(testData)).toBe(5)
})
