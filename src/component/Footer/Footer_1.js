import React from 'react';
import { Link } from 'react-router-dom'; // 導入 Link 元件
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function Footer() {
  return (
    <>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

              <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                {/* 在這裡放置您想要包含的內容 */}
              </Link>

              <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link px-2 text-body-secondary">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/content" className="nav-link px-2 text-body-secondary">content</Link>
                </li>
                <li className="nav-item">
                  <Link to="/*" className="nav-link px-2 text-body-secondary">NoPage</Link>
                </li>
                {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li> */}
              </ul>
            </footer>
        </div>
    </>
  );
}
