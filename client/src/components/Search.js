import './Search.scss';

import React from 'react';

const Search = () => {
  return (
    <form>
      <label htmlFor='source'>إختر مكانك الحالي</label>
      <select name='source' id='source' className='select-box'>
        <option value='default'>إختر مكانك</option>
      </select>
      <label htmlFor='destination'>إختر وجهتك</label>
      <select name='destination' id='destination' className='select-box'>
        <option value='default'>إختر وجهتك</option>
      </select>
      <button className='btn'>بحث</button>
    </form>
  );
};

export default Search;
