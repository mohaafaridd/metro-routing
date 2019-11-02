import React from 'react';

const StopItem = ({ stop, color, intensity, font, hover, icon }) => {
  return (
    <li
      className={`bg-${color}-${intensity} text-${font} rounded my-2 p-5 ${hover &&
        'hover:bg-gray-600 hover:text-white'} cursor-pointer text-lg font-bold transition-ease-in transition-250 transition-all`}
    >
      {icon === 'warning' && <i className='fas fa-times'></i>}
      {icon === 'loading' && <i class='fas fa-spinner fa-spin'></i>} {stop}
    </li>
  );
};

export default StopItem;
