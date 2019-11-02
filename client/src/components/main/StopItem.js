import React from 'react';

const StopItem = ({ stop }) => {
  return (
    <li className='bg-gray-200 text-black rounded my-2 p-5 hover:bg-gray-600 hover:text-white hover:shadow cursor-pointer text-lg font-bold transition-ease-in transition-100 transition-all'>
      {stop}
    </li>
  );
};

export default StopItem;
