import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LineState from './context/line/LineState';
import Search from './components/header/Search';
import Stops from './components/main/Stops';
function App() {
  return (
    <LineState>
      <Router>
        <Fragment>
          <div className='bg-gray-900 p-5 h-full'>
            <header className='container mx-auto mb-3 bg-gray-600 p-6 shadow-md rounded'>
              <h1 className='text-2xl font-bold text-center text-white'>
                دليل مترو انفاق القاهرة الكبري
              </h1>
              <Search />
            </header>

            <main>
              <Switch>
                <Route path='/directions' component={Stops} />
              </Switch>
            </main>
          </div>
        </Fragment>
      </Router>
    </LineState>
  );
}

export default App;
