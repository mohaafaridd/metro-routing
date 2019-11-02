import React, { useEffect, useContext, Fragment } from 'react';
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

  if (Object.keys(path).length === 0) {
    return <h4>loading</h4>;
  }

  return (
    <div>
      <ul className='container mx-auto'>
        {Object.keys(path).map(line => {
          return (
            <Fragment>
              <StopItem
                stop={line}
                color='blue'
                intensity='600'
                font='white'
                hover={false}
              />
              {path[line].map(stop => (
                <StopItem
                  stop={stop.name.arabic}
                  color='gray'
                  intensity='200'
                  front='black'
                  hover={true}
                />
              ))}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Stops;
