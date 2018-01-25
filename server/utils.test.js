const { sortify } = require('./sortify');

test('sorts lexicographically in descending order', () => {
  expect(sortify('1a2b3c' ).toBe('cba321'));
})
