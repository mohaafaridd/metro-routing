import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import LineState from './context/line/LineState';
import Search from './components/header/Search';
import Stops from './components/main/Stops';
function App() {
  return (
    <LineState>
      <Router>
        <Fragment>
          <div className='app p-5 h-full min-h-screen'>
            <header className='container mx-auto mb-3 bg-gray-600 p-6 shadow-md rounded'>
              <h1 className='text-2xl font-bold text-center text-white'>
                دليل مترو انفاق القاهرة الكبري
              </h1>
              <Search />
            </header>

            <main>
              <Switch>
                <Route path='/directions' component={Stops} />
                <Redirect to='/' />
              </Switch>
            </main>
          </div>
        </Fragment>
      </Router>
    </LineState>
  );
}

export default App;
