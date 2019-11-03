const _ = require('lodash');
const lineOne = require('./lines/linesOne');
const lineTwo = require('./lines/lineTwo');
const lineThree = require('./lines/lineThree');

const getDirection = (req, res) => {
  try {
    const { source, destination } = req.query;

    const lines = [...lineOne, ...lineTwo, ...lineThree];
    const path = req.graph
      .shortestPath(source, destination)
      .map(stop => lines.find(lineStop => lineStop.name.english === stop));
    const groupedPath = _.groupBy(path, 'line');

    res
      .status(200)
      .json({ success: true, message: 'Path found', path: groupedPath });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: 'Could not reach target', error });
  }
};

const getLines = (req, res) => {
  try {
    const lines = [lineOne, lineTwo, lineThree];
    res.status(200).json({ lines });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getDirection, getLines };
