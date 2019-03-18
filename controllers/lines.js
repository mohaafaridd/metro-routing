const Line = require('../models/line');
const { update } = require('./utils/intersections');
const lines = [];

const add = (name, stops) => {
  lines.push(new Line(name, stops));
  update(lines);
}

module.exports = { lines, add };