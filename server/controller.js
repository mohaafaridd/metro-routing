const getDirection = (req, res) => {
  const { source, destination } = req.query;

  const path = req.graph.shortestPath(source, destination);

  res.json({ success: true, message: 'Path found', path });
};

module.exports = { getDirection };
