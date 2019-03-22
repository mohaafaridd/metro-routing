/* 

  Proper line form
  lines: { name, stops[], intersections[{}] }

*/

class Line {
  constructor(name, stops) {
    this.name = name;
    this.stops = stops;
    this.intersections = [];
  }
}

module.exports = Line;