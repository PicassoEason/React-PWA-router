import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
        <h2>第一頁</h2>
    </div>
  );
}

<Route path="/" element={<Page1/>}/>