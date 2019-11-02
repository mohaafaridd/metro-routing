import React, { useContext, useEffect, useState } from 'react';
import LineContext from '../../context/line/lineContext';
import Dropdown from './Dropdown';
import Button from './Button';
const Search = () => {
  const lineContext = useContext(LineContext);
  const { lines, getLines } = lineContext;
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    getLines();
  }, []);

  if (lines.length === 0) {
    return <h4>Loading</h4>;
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log('source', source);
    console.log('destination', destination);
  };

  return (
    <form onSubmit={onSubmit}>
      <Dropdown
        lines={lines}
        id='source'
        defaultMessage='إختر نقطة البداية'
        onChange={setSource}
      />
      <Dropdown
        lines={lines}
        id='destination'
        defaultMessage='إختر نقطة النهاية'
        onChange={setDestination}
      />
      <Button />
    </form>
  );
};

export default Search;
