import React from 'react';
import Navbar from './component/Headers';
import Home from './component/Home';
import P1 from './Page1';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page1'); // 导航到'/page1'路径
  };

  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <button onClick={handleClick}>Click</button>
          </div>
        </div>
      </Router>
      <h1>h1</h1>
    </>
  );
}

export default App;
