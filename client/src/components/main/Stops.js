import React, { useEffect, useContext } from 'react';
import queryString from 'query-string';
import StopItem from './StopItem';
import LineContext from '../../context/line/lineContext';

const Stops = ({ match, location }) => {
  const {
    getPath,
    path,
    source,
    destination,
    setSource,
    setDestination,
  } = useContext(LineContext);

  useEffect(() => {
    if (source && destination) {
      getPath(source, destination);
    } else {
      const values = queryString.parse(location.search);
      setSource(values.from);
      setDestination(values.to);
    }
  }, [source, destination]);

  if (path.length === 0) {
    return <h4>loading</h4>;
  }

  return (
    <div>
      <ul className='container mx-auto'>
        {path.map(stop => (
          <StopItem stop={stop} />
        ))}
      </ul>
    </div>
  );
};

export default Stops;
