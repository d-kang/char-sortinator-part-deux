const sortify = (str) => {
  const result = str
    .split('')
    .sort()
    .reverse()
    .join('');
  return result;
}

module.exports = {
  sortify,
};
