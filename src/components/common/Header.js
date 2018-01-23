import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'blue' };
  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse container" id="navbarNav">
          <ul id="main-nav" className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeStyle={activeStyle}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/upgrade-tree" activeStyle={activeStyle}>Upgrade Tree</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/stats" activeStyle={activeStyle}>Stats</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pattern-library" activeStyle={activeStyle}>Pattern Library</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
