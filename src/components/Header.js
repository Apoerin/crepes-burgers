import React, {useState} from 'react';

import { Link } from "react-scroll";

import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


const Header = () =>  {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //const closeMobileMenu = () => setClick(false);

    return (
        <header>
            <div className="header-container">
                        <a href="/home"><img src={logo} alt="Crepes&Burgers" /></a>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        <li className="option">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Home</Link>
                        </li>
                        <li className="option">
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link>
                        </li>
                        <li className="option">
                            <Link activeClass="active" to="address" spy={true} smooth={true} duration={1000}>Where&When</Link>
                        </li>
                        <li className="option">
                            <a href="/menu">Menu</a>
                        </li>
                    </ul>
                <div className="mobile-menu-icons" onClick={handleClick}>
                    {click ? (
                        <FontAwesomeIcon className="close-menu" icon={["fas", "times"]} />
                    ) : (
                        <FontAwesomeIcon className="open-menu" icon={["fas", "bars"]} />
                        )}
                </div>
            </div>
        </header>
    )
}

export default Header;
