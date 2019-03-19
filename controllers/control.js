const lines = require('./lines');

lines.lines
const control = (req, res, next) => {
  lines.add('Giza', ['1', '2'])
  res.render('admin/index', { lines: lines.lines });
}

module.exports = { control }