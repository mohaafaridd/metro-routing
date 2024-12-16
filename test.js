const fs = require('fs');

const stations = require('./apps/app/src/context/app/stations.json');

const transformedStations = stations.map((station) => {
  const connections = [...station.next, ...station.previous];

  delete station.next;
  delete station.previous;

  return {
    ...station,
    connections,
  };
});

fs.writeFileSync(
  './apps/app/src/context/app/stations.json',
  JSON.stringify(transformedStations, null, 2),
);
