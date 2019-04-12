const Graph = require("graph-data-structure");
const util = require('util');

const { lines } = require('./lines');
const { update } = require('./utils/intersections');

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

const getLineName = (stop) => {

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

  return getLineName(source).some(r => getLineName(destination).indexOf(r) >= 0)

}

const addDirectionsTo = (array, source, destination) => {
  const newPath = [];

  for (let index = 0; index < array.length - 1; index++) {
    const first = array[index];
    const second = array[index + 1];

    const lineName = getLineName(first).filter(element => getLineName(second).includes(element))[0];
    const line = lines.filter((element) => element.name === lineName)[0];
    const lineIndex = lines.findIndex((e) => e === line);

    const firstIndex = line.stops.findIndex((e) => e === first);
    const secondIndex = line.stops.findIndex((e) => e === second);

    let direction;

    switch (firstIndex < secondIndex) {
      case true:

        switch (lineIndex) {
          case 0:
            direction = 'المرج'
            break;

          case 1:
            direction = 'شبرا'
            break;

          case 2:
            direction = 'العباسية'
            break;
        }

        break;

      case false:

        switch (lineIndex) {
          case 0:
            direction = 'حلوان'
            break;

          case 1:
            direction = 'المنيب'
            break;

          case 2:
            direction = 'العتبة'
            break;
        }
        break;
    }

    const inNewPath = newPath.some((e) => e.direction === direction);

    if (inNewPath) {

      const directionIndex = newPath.findIndex((e) => e.direction === direction);
      let stops = newPath[directionIndex].stops;
      stops.push(first, second);

    } else {

      newPath.push({
        direction,
        stops: [first, second]
      });
    }
  }

  newPath.forEach((e) => {
    e.stops = [...new Set(e.stops)];
  })

  return newPath;
}

const search = (req, res) => {

  const source = req.query.source;
  const destination = req.query.destination;
  let shortestPath
  toGraph(lines);
  try {
    shortestPath = graph.shortestPath(source, destination);
  } catch (error) {
    return res.render('error', { message: 'احنا هنهزر' });
  }

  let message;

  // Case 1: stops on the same line
  const inLine = isInLine(source, destination);

  if (inLine) {
    message = 'لا تحتاج إلي تغيير الخط الحالي'
  }

  // Case 2: stops on different lines
  if (!inLine) {
    message = 'ستحتاج إلي تغيير خطك الحالي';
  }

  // Case 3: stops aren't connected by any mean

  if (!getLineName(source)[0] || !getLineName(destination)[0]) {
    res.render('/');
  }

  // Case 4: Source is the destination

  if (source === destination) {
    message = 'احنا هنهزر'
    return res.render('error', { message })
  }

  shortestPath = addDirectionsTo(shortestPath, source, destination);

  res.render('results', { path: shortestPath, message, title: `اقصر طريق من ${source} الي ${destination}`, lines, source, destination })

}

module.exports = {
  search,
}