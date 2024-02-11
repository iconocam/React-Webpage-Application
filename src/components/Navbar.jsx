import React from "react";
import navProps from "./navProps";
import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = ({isLoggedIn}) => {
    const { brandName, imageSrcPath, navItems } = navProps;
    return (
        <nav className ="navbar-container">
            <div className= "brand-container">
            <Link to="/">
        <img src={imageSrcPath} alt={`${brandName} Logo`} />
        <h1>{brandName}</h1>
        </Link>
            </div>
            <ul className="nav-links">
                {navItems.map((item, index) => {
if (typeof item !== 'string') {
    console.error(`Unexpected type for item at index ${index}:`, typeof item, item);
    return null; 
}

return (
    <li key={index}>
    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
    </li>
);
})}
{isLoggedIn && (
        <li>
            <Link to="/main">Main Page</Link>
        </li>
        )}
    </ul>
    </nav>
);
};

export default Navbar;