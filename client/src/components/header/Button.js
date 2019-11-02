import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import LineContext from '../../context/line/lineContext';

const Button = () => {
  const { source, destination, getPath } = useContext(LineContext);

  const onClick = e => {
    if (source && destination) {
      getPath(source, destination);
    }
  };

  return (
    <Fragment>
      <Link
        onClick={onClick}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        to={`/directions?from=${source}&to=${destination}`}
      >
        بحث
      </Link>
    </Fragment>
  );
};

export default Button;
