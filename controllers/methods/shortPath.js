const getShortestPath = (graph, source, destination, res) => {

  // Getting the shortest Path
  let shortestPath;

  try {
    shortestPath = graph.shortestPath(source, destination);
  } catch (error) {
    return res.render('error', { message: 'احنا هنهزر' });
  }

  return shortestPath;
}

module.exports = {
  getShortestPath,
}