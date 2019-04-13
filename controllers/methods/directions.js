const { getLineName } = require('./line');

const addDirectionsTo = (array, lines) => {
  const newPath = [];

  for (let index = 0; index < array.length - 1; index++) {
    const first = array[index];
    const second = array[index + 1];

    const lineName = getLineName(first, lines).filter(element => getLineName(second, lines).includes(element))[0];
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
            direction = 'الجيزة'
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
};

module.exports = {
  addDirectionsTo,
}