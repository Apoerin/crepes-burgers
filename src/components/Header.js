import React from 'react';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function Header()  {
    return (
        <header>
        <nav className="header-nav">
            <a href="#home"><img src={logo} alt="Crepes&Burgers"/></a>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/address">Where&When</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
            </ul>
        </nav>
            <div className="nav-mobile">
                <div className="logo">
                    <a href="#home"><img src={logo} alt="Crepes&Burgers"/></a>
                </div>
                <div className="mobile-menu">
                    <FontAwesomeIcon className="open-menu" icon={["fas", "bars"]}/>
                    <FontAwesomeIcon className="close-menu" icon={["fas", "times"]}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
