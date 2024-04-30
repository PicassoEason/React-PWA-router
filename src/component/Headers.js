import React from 'react';
import { Link } from 'react-router-dom'; // 導入 Link 元件
import About from '../pages/About';
import Content from '../pages/Content';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">Home</Link> {/* 使用 Link 元件連結到首頁 */}
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" activeClassName="active">About</Link> {/* 使用 Link 元件連結到 About 頁面 */}
            </li>
            <li className="nav-item">
              <Link to="/content" className="nav-link" activeClassName="active">Content</Link> {/* 使用 Link 元件連結到 Content 頁面 */}
            </li>
            <li className="nav-item">
              <Link to="/nonexistent" className="nav-link" activeClassName="active">Nonexistent</Link> {/* 使用 Link 元件連結到不存在的頁面 */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// 在 Header 元件外部包裹 BrowserRouter 和 Routes
<BrowserRouter>
  <Routes>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/content" element={<Content />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
</BrowserRouter>
