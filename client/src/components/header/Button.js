import React, { Fragment } from 'react';

const Button = () => {
  return (
    <Fragment>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
      >
        بحث
      </button>
    </Fragment>
  );
};

export default Button;
