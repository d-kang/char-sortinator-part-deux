const { sortify } = require('./utils');

const sortHandler = (req, res) => {
  console.log('req', req.body);
  const { payload } = req.body;
  res.send({ data: sortify(payload) });
}

module.exports = {
  sortHandler,
}
