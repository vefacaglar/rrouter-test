import React from "react";
import { NavLink, Link, withRouter } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">React App</Link>
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

export default withRouter(Nav);