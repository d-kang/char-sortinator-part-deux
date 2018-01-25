const { sortify } = require('./utils');

const sortHandler = (req, res) => {
  const { payload } = req.body;
  res.send({ data: sortify(payload) });
}

module.exports = {
  sortHandler,
}
