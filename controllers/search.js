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

const getLine = (stop) => {

  const stops = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if ((line.stops).indexOf(stop) > -1) {
      stops.push(line.name);
    }
  }

  return stops;

}

const isInLine = (source, destination) => {

  return getLine(source).some(r => getLine(destination).indexOf(r) >= 0)

}

const search = (req, res) => {

  const source = req.query.source;
  const destination = req.query.destination;

  let message;

  // Case 1: stops on the same line
  const inLine = isInLine(source, destination);

  if (inLine) {
    message = 'لا تحتاج إلي تغيير الخط الحالي'
  }

  // Case 2: stops on different lines
  if (!inLine) {
    message = 'ستحتاج إلي تغيير خطك الحالي'
  }

  // Case 3: stops aren't connected by any mean

  // Case 4: Source is the destination

  if (source === destination) {
    message = 'احنا هنهزر'
    return res.render('error', { message })
  }

  toGraph(lines);

  const shortestPath = graph.shortestPath(source, destination);
  console.log(shortestPath);

  res.render('results', { path: shortestPath, message })

}

module.exports = {
  search,
}