const { lines } = require('../controllers/lines');
const home = (req, res) => {

  const source = req.body['source'];
  const destination = req.body['destination'];

  res.render('index', { title: 'Express', lines });
}

module.exports = {
  home
}