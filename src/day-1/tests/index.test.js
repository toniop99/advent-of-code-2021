const sum = require('../src/index')

test('1 + 2 equal to 3', () => {
  expect(sum(1, 2)).toBe(3)
})
