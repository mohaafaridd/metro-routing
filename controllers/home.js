const Line = require('../models/line');
var { update } = require('../controllers/utils/intersections');

const lines = [];

const line1 = new Line('Cairo', ['Ramses', 'Haram', 'October'], lines);
lines.push(line1);

const line2 = new Line('Alexandria', ['Ramses', 'Abo-Qeer'], lines);
lines.push(line2);

const line3 = new Line('Aswan', ['Edfou', 'Ramses'], lines);
lines.push(line3);

update(lines);

const home = (req, res) => {

  const source = req.body['source'];
  const destination = req.body['destination'];

  res.render('index', { title: 'Express', lines });
}

module.exports = {
  home
}