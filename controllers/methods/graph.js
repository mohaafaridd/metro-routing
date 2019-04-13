const Graph = require("graph-data-structure");

const toGraph = (array) => {
  const graph = Graph();
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
  return graph;
};
module.exports = {
  toGraph,
};
