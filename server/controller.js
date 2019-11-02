const _ = require('lodash');
const lineOne = require('./lines/linesOne');
const lineTwo = require('./lines/lineTwo');
const lineThree = require('./lines/lineThree');

const getDirection = (req, res) => {
  const { source, destination } = req.query;

  const lines = [...lineOne, ...lineTwo, ...lineThree];
  const path = req.graph
    .shortestPath(source, destination)
    .map(stop => lines.find(lineStop => lineStop.name.english === stop));
  const groupedPath = _.groupBy(path, 'line');

  res.json({ success: true, message: 'Path found', path: groupedPath });
};

const getLines = (req, res) => {
  try {
    const lines = [lineOne, lineTwo, lineThree];
    // .map(stop => ({
    //   arabic: stop.name.arabic,
    //   english: stop.name.english,
    // }));
    res.json({ lines });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = { getDirection, getLines };
