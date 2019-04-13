const { lines } = require('../lines');

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

  return getLineName(source, lines).some(r => getLineName(destination, lines).indexOf(r) >= 0)

}

module.exports = {
  getLineName,
  isInLine
}