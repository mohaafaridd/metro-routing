const lineOne = require('./lines/linesOne');
const lineTwo = require('./lines/lineTwo');
const lineThree = require('./lines/lineThree');

const getDirection = (req, res) => {
  const { source, destination } = req.query;

  const path = req.graph.shortestPath(source, destination);

  res.json({ success: true, message: 'Path found', path });
};

const getLines = (req, res) => {
  try {
    const lines = [...lineOne, ...lineTwo, ...lineThree].map(stop => ({
      arabic: stop.name.arabic,
      english: stop.name.english,
    }));
    res.json({ lines });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = { getDirection, getLines };
