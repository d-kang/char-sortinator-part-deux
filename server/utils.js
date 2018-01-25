const sortify = (str) => {
  if (typeof str !== 'string') { return [str, null]; }
  const result = str
    .split('')
    .sort()
    .reverse()
    .join('');
  return [str, result];
}

module.exports = {
  sortify,
};
