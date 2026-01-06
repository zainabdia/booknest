import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          BookNest
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">Signup</Link></li>
       <li> <Link to="/login">Login</Link></li>
 

      </ul>
    </nav>
  );
};

export default NavBar;
