const { lines } = require('../controllers/lines');

const home = (req, res) => {
  res.render('index', { title: 'Metro', lines });
}

module.exports = {
  home
}