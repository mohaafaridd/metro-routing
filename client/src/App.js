import React from 'react';
import Search from './components/Search';
function App() {
  return (
    <div className='App' dir='rtl'>
      <h1>دليل مترو القاهرة الكبري</h1>
      <div className='container'>
        <div className='tile'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
