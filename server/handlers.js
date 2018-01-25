const sortHandler = (req, res) => {
  console.log('req', req.body);
  const { payload } = req.body;
  res.send(req.body);
}

module.exports = {
  sortHandler,
}
