import React from 'react';

const StopItem = ({ stop, color, intensity, font, hover }) => {
  return (
    <li
      className={`bg-${color}-${intensity} text-${font} rounded my-2 p-5 ${hover &&
        'hover:bg-gray-600 hover:text-white hover:shadow'} cursor-pointer text-lg font-bold transition-ease-in transition-250 transition-all`}
    >
      {stop}
    </li>
  );
};

export default StopItem;
