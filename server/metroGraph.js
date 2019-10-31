const Graph = require('graph-data-structure');
const graph = Graph();

const lineOne = require('./lines/linesOne');
const lineTwo = require('./lines/lineTwo');
const lineThree = require('./lines/lineThree');

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

// Line 3
lineThree.forEach((stop, i, line) => {
  if (i < lineThree.length - 1) {
    graph.addEdge(line[i].name.english, line[i + 1].name.english);
  }
});

console.log(graph.nodes().length);

return graph;
