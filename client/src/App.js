import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LineState from './context/line/LineState';
import Search from './components/header/Search';
function App() {
  return (
    <LineState>
      <Router>
        <Fragment>
          <header className='container mx-auto my-3 bg-gray-500 p-6 shadow-md rounded'>
            <h1 className='text-2xl font-bold text-center text-white'>
              دليل مترو انفاق القاهرة الكبري
            </h1>
            <Search />
          </header>

          <main></main>
        </Fragment>
      </Router>
    </LineState>
  );
}

export default App;
