import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

const Footer = () => {
    return (
        <footer>
            <div className="socials">
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon className="icon" icon={["fab", "facebook"]}/>
                </a>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon className="icon" icon={["fab", "instagram"]}/>
                </a>
                <a href="https://twitter.com/?lang=en">
                    <FontAwesomeIcon className="icon" icon={["fab", "twitter"]}/>
                </a>
            </div>
            <div>
                <span>2020 @ Best Meals Reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
