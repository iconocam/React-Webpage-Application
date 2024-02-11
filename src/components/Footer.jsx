import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
function Footer() {
const footerNavItems = [
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Community", link: "/community" },

];

return (
    <footer>
    <nav aria-label="Footer Navigation" role="navigation">
        <ul>
        {footerNavItems.map((item, index) => (
            <li key={index}>
            <Link to={item.link}>{item.label}</Link>
            </li>
        ))}
        </ul>
    </nav>
    <p>&copy; 2024 New Cognitive Era. All Rights Reserved.</p>
    </footer>
);
}

export default Footer;