const { getLineName } = require('./line');

const getDirection = (lines, line, first, second) => {

  const firstIndex = line.stops.findIndex((e) => e === first);
  const secondIndex = line.stops.findIndex((e) => e === second);
  const lineIndex = lines.findIndex((e) => e === line);

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
          direction = 'الجيزة'
          break;

        case 2:
          direction = 'العتبة'
          break;
      }
      break;
  }

  return direction;
}

const getLine = (lines, first, second) => {
  const firstLineName = getLineName(first, lines);
  const secondLineName = getLineName(second, lines);

  const lineName = firstLineName.filter(element => secondLineName.includes(element))[0];

  return lines.filter((element) => element.name === lineName)[0];
}

const addDirectionsTo = (array, lines) => {
  const newPath = [];

  for (let index = 0; index < array.length - 1; index++) {

    const first = array[index];

    const second = array[index + 1];

    const line = getLine(lines, first, second);

    const direction = getDirection(lines, line, first, second);

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
};

module.exports = {
  addDirectionsTo,
}