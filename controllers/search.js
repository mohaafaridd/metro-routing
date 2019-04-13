const { lines } = require('./lines');
const { toGraph } = require('./methods/graph');
const { addDirectionsTo } = require('./methods/directions');
const { getShortestPath } = require('./methods/shortPath');
const { getProperMessage } = require('./methods/messages');
const { getProperPrice } = require('./methods/price');

const search = (req, res) => {

  const source = req.query.source;

  const destination = req.query.destination;

  const graph = toGraph(lines);

  const shortestPath = getShortestPath(graph, source, destination, res);

  const price = getProperPrice(shortestPath);

  const message = getProperMessage(source, destination, res);

  const finalPath = addDirectionsTo(shortestPath, lines);

  res.render('results', {
    path: finalPath, message,
    title: `اقصر طريق من ${source} الي ${destination}`,
    lines,
    source,
    destination,
    stops: shortestPath.length,
    price
  });

}

module.exports = {
  search,
}