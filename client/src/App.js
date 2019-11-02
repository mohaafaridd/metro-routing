import React, { Fragment } from 'react';
import LineState from './context/line/LineState';
import Search from './components/header/Search';
function App() {
  return (
    <LineState>
      <Fragment>
        <header className='container mx-auto my-3 bg-gray-500 p-6 shadow-md rounded'>
          <h1 className='text-2xl font-bold text-center text-white'>
            دليل مترو انفاق القاهرة الكبري
          </h1>
          <Search />
        </header>

        <main></main>
      </Fragment>
    </LineState>
  );
}

export default App;
