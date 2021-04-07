import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../images/logo.png';

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="nav-container">
        <Link to="/">
          <img src={logo} alt="Crepes&Burgers" />
        </Link>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className="option">
            <Link to="/">Home</Link>
          </li>
          <li className="option">
            <Link to="/about">About</Link>
          </li>
          <li className="option">
            <Link to="/address">Where&When</Link>
          </li>
          <li className="option">
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
        <div className="mobile-menu-icons" onClick={handleClick} role="button">
          {click ? (
            <button type="button">
              <FaTimes className="close-menu" />
            </button>
          ) : (
            <button type="button">
              <FaBars className="open-menu" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
