import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

import logo from '../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //const closeMobileMenu = () => setClick(false);

    return (
        <header>
            <div className="header-container">
                <NavLink as={NavLink} to="/"><img src={logo} alt="Crepes&Burgers" /></NavLink>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option">
                    <NavLink as={NavLink} to="/">Home</NavLink>
                    <Link activeClass="active" to="intro" spy={true} smooth={true} duration={1000}>Home</Link>
                    </li>
                    <li className="option">
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link>
                    </li>
                    <li className="option">
                        <Link activeClass="active" to="address" spy={true} smooth={true} duration={1000}>Where&When</Link>
                    </li>
                    <li className="option">
                    <NavLink as={NavLink} to="/menu">Menu</NavLink>
                    </li>
                </ul>
                <div className="mobile-menu-icons" onClick={handleClick}>
                    {click ? (<FaTimes className="close-menu" />) : (<FaBars className="open-menu" />)}
                </div>
            </div>
        </header>
    )
}
