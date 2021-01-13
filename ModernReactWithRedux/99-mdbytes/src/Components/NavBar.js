import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <NavLink className="navbar-brand" to="/">
          <img src="images/favicon_io/favicon-32x32.png" />
        </NavLink>

        <button
          id="mobile-button"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink id="home-link" className="nav-link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="services-link" className="nav-link" to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="portfolio-link" className="nav-link" to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="contact-link" className="nav-link" to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="privacy-link" className="nav-link" to="/privacy" activeClassName="active">
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
