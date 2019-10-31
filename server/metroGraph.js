const Graph = require('graph-data-structure');
const graph = Graph();

const lineOne = require('./lines/linesOne');
const lineTwo = require('./lines/lineTwo');

// Line 1
lineOne.forEach((stop, i, line) => {
  if (i < lineOne.length - 1) {
    graph.addEdge(line[i].name.english, line[i + 1].name.english);
  }
});

// Line 2
lineTwo.forEach((stop, i, line) => {
  if (i < lineTwo.length - 1) {
    graph.addEdge(line[i].name.english, line[i + 1].name.english);
  }
});

console.log(graph.nodes());

return graph;
