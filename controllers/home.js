const { lines } = require('../controllers/lines');
const { update } = require('./utils/intersections');

const home = (req, res) => {

  update(lines);

  res.render('index', { title: 'Metro', lines });
}

module.exports = {
  home
}