import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import martinPhoto from "../images/home/e6f200e2ad5534e920140a3980fb0746.png";
import twitterLogo from "../images/icons/Twitter_Social_Icon_Rounded_Square_Color.png";
import facebookLogo from "../images/icons/f_logo_RGB-Blue_72.png";
import linkedinLogo from "../images/icons/LI-In-Bug.png";

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
                  <img className="social-icon" src={twitterLogo} alt="twitter logo" />
                </a>
                <a href="https://www.facebook.com/mdbytes" className="text-dark">
                  <img className="social-icon" src={facebookLogo} alt="facebook logo" />
                </a>
                <a href="https://www.linkedin.com/in/mdbytes/" className="text-dark">
                  <img className="social-icon" src={linkedinLogo} alt="linked in logo" />
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
              <h5>
                <NavLink to="/services">Services</NavLink>
              </h5>
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
              <h5>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </h5>
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
                  <NavLink className="text-muted" to="/portfolio">
                    WordPress
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-6 col-md">
              <div id="footer-profile-photo">
                <img src={martinPhoto} alt="photo of developer martin dwyer" height="130" />
              </div>
              <p>
                Martin Dwyer
                <br />
                MD Bytes Founder and Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
