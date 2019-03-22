const { lines } = require('../controllers/lines');
const { update } = require('./utils/intersections');
const home = (req, res) => {

  const source = req.body['source'];
  const destination = req.body['destination'];

  update(lines);

  console.log(lines[0]);

  res.render('index', { title: 'Express', lines });
}

module.exports = {
  home
}