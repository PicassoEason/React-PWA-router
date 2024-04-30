import React from 'react';
import Navbar from './component/Headers';
import Home from './component/Home';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
        <Home />
        <Home />
      </div>
    </div>
  );
}

