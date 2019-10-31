const graph = require('./metroGraph');

const getDirection = (req, res) => {
  res.json({ success: true, message: 'Path found', graph });
};

module.exports = { getDirection };
