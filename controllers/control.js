const lines = require('./lines');

const control = (req, res, next) => {
  res.render('control', { lines: lines.lines });
}

module.exports = { control }