const sortify = (str) => {
  if (typeof str !== 'string') { return [str, null]; }
  const result = str
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
  return [str, result];
}

module.exports = {
  sortify,
};
