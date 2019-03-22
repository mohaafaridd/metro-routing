// Gets the matched stations on one line and another line
const getMatch = (line, target) => {
  const match = [];

  if (line.name === target.name) {
    return
  }

  const lineStops = line.stops;
  const targetStops = target.stops;

  for (var i = 0; i < lineStops.length; i += 1) {
    if (targetStops.indexOf(lineStops[i]) > -1) {
      match.push(lineStops[i]);
    }
  }

  return match;
}

const getIntersectionsOf = (line, lines) => {

  const intersections = [];

  // Exits if the lines array is empty
  if (lines.length === 0) {
    return;
  }

  for (let index = 0; index < lines.length; index++) {
    const target = lines[index];
    const match = getMatch(line, target);
    if (match) {
      intersections.push({
        name: target.name,
        intersections: match,
      });
    }
  }

  return intersections;
}

const update = (lines) => {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const intersections = getIntersectionsOf(line, lines);

    if (intersections) {
      line.intersections = intersections;
    }

  }
}

module.exports = { update }