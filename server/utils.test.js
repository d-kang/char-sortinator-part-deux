const { sortify } = require('./utils');

test('sorts lexicographically in descending order', () => {
  expect(sortify('1a2b3c')).toEqual(['1a2b3c', 'cba321']);
})

test('if input is not a string returns empty string', () => {
  expect(sortify(1)).toEqual([1, null]);
})
