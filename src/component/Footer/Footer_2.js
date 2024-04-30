import React from 'react';
import { Link } from 'react-router-dom'; // 導入 Link 元件
export default function Footer() {
    return (
      <>
        <div className="container">
            <footer className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
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
              </ul>
              <p className="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
            </footer>
        </div>
      </>
    );
}
