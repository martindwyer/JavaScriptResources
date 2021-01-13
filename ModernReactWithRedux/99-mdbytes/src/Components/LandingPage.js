import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div id="page-indicator">Home</div>
        <div className="jumbotron">
          <div className="jumbo-message">
            <h1 className="display-4">
              <img src="images/home/mdbytes-name.png" alt="mdbytes logo name" />
            </h1>
            <p className="lead">Adding value with technology</p>

            <NavLink className="btn btn-primary btn-lg" to="/services" role="button">
              Learn more
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
