import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./heading.css";


const Header = () => {
    return (
        <>
        {/* start header */}
        <div className="header">
          <div className="container">
            <img className="logo" src="img/logo.png" />
            <div className="links">
              <span className="icon">
                <span />
                <span />
                <span />
              </span>
              <ul>
                <li>
                  <Link to="/home">serveces</Link>
                </li>
                <li>
                  <Link to="/new">portofolio</Link>
                </li>
                <li>
                  <Link to="/greating">not about</Link>
                </li>
                <li>
                  <Link to="/app">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
    );
}

export default Header;
