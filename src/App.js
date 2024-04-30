import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>

    </div>
    </Router>
      <h1>
        text

      </h1>
    </>
  );
}

export default App;
