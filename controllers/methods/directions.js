const { getLineName } = require('./line');

/* [
  {
    direction: string;
    stops: [string];
  }
]
*/

const getDirection = (lines, line, first, second) => {
  const firstIndex = line.stops.findIndex(e => e === first);
  const secondIndex = line.stops.findIndex(e => e === second);
  const lineIndex = lines.findIndex(e => e === line);

  let direction;

  switch (firstIndex < secondIndex) {
    case true:

      switch (lineIndex) {
        case 0:
          direction = 'المرج';
          break;

        case 1:
          direction = 'شبرا';
          break;

        case 2:
          direction = 'العباسية';
          break;

        default:
          return null;
      }

      break;

    case false:

      switch (lineIndex) {
        case 0:
          direction = 'حلوان';
          break;

        case 1:
          direction = 'الجيزة';
          break;

        case 2:
          direction = 'العتبة';
          break;

        default:
          return null;
      }
      break;

    default:
      return null;
  }

  return direction;
};

const getLine = (lines, first, second) => {
  const firstLineName = getLineName(first, lines);
  const secondLineName = getLineName(second, lines);

  const lineName = firstLineName.filter(element => secondLineName.includes(element))[0];

  return lines.filter(element => element.name === lineName)[0];
};

const getNewPath = (path, lines) => {
  const newPath = [
    { direction: 'placeholder' },
  ];

  for (let index = 0; index < path.length - 1; index += 1) {
    const first = path[index];

    const second = path[index + 1];

    const line = getLine(lines, first, second);

    const direction = getDirection(lines, line, first, second);

    const lastDirection = newPath[newPath.length - 1].direction === direction;

    if (lastDirection) {
      const directionIndex = newPath.length - 1;
      const { stops } = newPath[directionIndex];
      stops.push(first, second);
    } else {
      newPath.push({
        direction,
        stops: [first, second],
      });
    }
  }

  newPath.forEach((e) => {
    e.stops = [...new Set(e.stops)];
  });

  return newPath.slice(1);
};

module.exports = {
  getNewPath,
};
