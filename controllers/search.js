const { lines } = require('./lines');
const Graph = require("graph-data-structure");

const graph = Graph();

const toGraph = (array) => {

  for (let index = 0; index < array.length; index++) {
    const line = array[index];

    for (let j = 0; j < line.stops.length - 1; j++) {
      const fromStop = line.stops[j];
      const toStop = line.stops[j + 1];

      // to enable verse searching
      graph.addEdge(fromStop, toStop);
      graph.addEdge(toStop, fromStop);
    }

  }

}

/* const getLine = (stop) => {

  const stops = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if ((line.stops).indexOf(stop) > -1) {
      stops.push({
        name: line.name,
        index
      });
    }
  }

  return stops;

} */

const search = (req, res) => {

  const source = req.query.source;
  const destination = req.query.destination;

  toGraph(lines);

  const shortestPath = graph.shortestPath(source, destination);
  console.log(shortestPath);

  res.render('results', { path: shortestPath })

}

module.exports = {
  search,
}