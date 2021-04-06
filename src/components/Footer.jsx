import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="socials">
                <a href="https://www.facebook.com/">
                    <FaFacebook className="icon" />
                </a>
                <a href="https://www.instagram.com/">
                    <FaInstagram className="icon" />
                </a>
                <a href="https://twitter.com/?lang=en">
                    <FaTwitter className="icon" />
                </a>
            </div>
            <div>
                <span>2020 @ Best Meals Reserved</span>
            </div>
        </footer>
    );
}
