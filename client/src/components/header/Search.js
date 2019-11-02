import React, { useContext, useEffect, useState } from 'react';
import LineContext from '../../context/line/lineContext';
import Dropdown from './Dropdown';
import Button from './Button';
const Search = () => {
  const lineContext = useContext(LineContext);
  const {
    lines,
    getLines,
    getPath,
    setSource,
    setDestination,
    source,
    destination,
  } = lineContext;

  useEffect(() => {
    getLines();
  }, []);

  if (lines.length === 0) {
    return <h4>Loading</h4>;
  }

  return (
    <div>
      <Dropdown
        lines={lines}
        id='source'
        defaultMessage='إختر نقطة البداية'
        onChange={setSource}
        value={source}
      />
      <Dropdown
        lines={lines}
        id='destination'
        defaultMessage='إختر نقطة النهاية'
        onChange={setDestination}
        value={destination}
      />

      <Button />
    </div>
  );
};

export default Search;