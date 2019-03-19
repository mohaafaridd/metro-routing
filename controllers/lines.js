const Line = require('../models/line');
const { update } = require('./utils/intersections');
const lines = [];

const add = (name, stops) => {
  lines.push(new Line(name, stops));
  update(lines);
}


const tempLines = [
  {
    name: 'Giza',
    stops: [
      'a',
      'b',
      'c'
    ]
  },

  {
    name: 'Cairo',
    stops: [
      'a',
      'b',
      'c'
    ]
  }

  ,

  {
    name: 'Alexandria',
    stops: [
      'a',
      'b',
      'c'
    ]
  }
]

module.exports = { 'lines': tempLines, add };