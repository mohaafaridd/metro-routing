import React, { Fragment } from 'react';
import LineState from './context/line/LineState';
import Search from './components/Search';
function App() {
  return (
    <LineState>
      <Fragment>
        <Search />
      </Fragment>
    </LineState>
  );
}

export default App;
