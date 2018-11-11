import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Vefa Çağlar</a>
        <ul className="right">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/about">About</NavLink>
          </li>
          <li>
              <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;