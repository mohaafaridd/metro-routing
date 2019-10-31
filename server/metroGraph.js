const Graph = require('graph-data-structure');
const lineOne = require('./lines/linesOne');

const graph = Graph();

// Line 1
lineOne.forEach((stop, i, line) => {
  if (i < lineOne.length - 1) {
    graph.addEdge(line[i].name.english, line[i + 1].name.english);
  }
});

console.log(graph.nodes());

return graph;
