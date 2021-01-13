import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md">
              <div id="social-media">
                <h5>Social Media</h5>
                <a href="https://twitter.com/MDBytes" className="text-dark">
                  <img className="social-icon" src="images/icons/Twitter_Social_Icon_Rounded_Square_Color.png" />
                </a>
                <a href="https://www.facebook.com/mdbytes" className="text-dark">
                  <img className="social-icon" src="images/icons/f_logo_RGB-Blue_72.png" />
                </a>
                <a href="https://www.linkedin.com/in/mdbytes/" className="text-dark">
                  <img className="social-icon" src="images/icons/LI-In-Bug.png" />
                </a>
              </div>
              <div id="copyright">
                <h5>
                  <span className="logo-style">md </span>
                  <span className="name-style">Bytes</span>
                </h5>
                <small className="d-block mb-3 text-muted">&copy; 2020</small>
              </div>
            </div>
            <div className="col-6 col-md">
              <h5>Services</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <NavLink className="text-muted" to="/services">
                    Mobile-Ready Websites
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/services">
                    Integrated Business Applications
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/services">
                    Mobile Applications
                  </NavLink>
                </li>

                <li>
                  <NavLink className="text-muted" to="/services">
                    e-Commerce Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/services">
                    Social Media
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/services">
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Portfolio</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <NavLink className="text-muted" to="/portfolio">
                    Microsoft ASP.NET
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/portfolio">
                    Node.js, Express, React
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/portfolio">
                    Java Spring Framework
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/portfolio">
                    PHP Full Stack
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-muted" to="/portfolio">
                    SQL, MySQL, MongoDB
                  </NavLink>
                </li>
                <li></li>
                <li>
                  <a className="text-muted" href="#">
                    WordPress
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-6 col-md">
              <h5>About</h5>
              <p>
                Commited to individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to
                change over following a plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
