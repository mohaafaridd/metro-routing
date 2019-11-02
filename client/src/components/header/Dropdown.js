import React, { Fragment } from 'react';

const Dropdown = props => {
  const { lines, id, defaultMessage, onChange, value } = props;

  return (
    <div className='flex flex-wrap my-6'>
      <label
        className='self-center text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'
        htmlFor={id}
      >
        {defaultMessage}
      </label>
      <div className='inline-block relative w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-5/6'>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
        <select
          id={id}
          name={id}
          onChange={e => onChange(e.target.value)}
          // defaultValue='default'
          value={value ? value : 'default'}
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        >
          <option disabled value='default'>
            {defaultMessage}
          </option>
          {lines.map((line, i) => (
            <optgroup key={i} label={line[0].line}>
              {line.map((stop, j) => (
                <option key={j} value={stop.name.english}>
                  {stop.name.arabic}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
