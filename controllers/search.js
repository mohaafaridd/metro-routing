const search = (req, res) => {

  const source = req.body['source'];
  const destination = req.body['destination'];

  res.render('results', {source, destination})

}

module.exports = {
  search,
}