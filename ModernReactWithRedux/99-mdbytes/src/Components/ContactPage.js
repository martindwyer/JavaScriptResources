import React, { Component } from "react";
import locationMap from "./images/home/map.PNG";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div id="page-indicator">Contact</div>
        <div className="site-header container-fluid">
          <div className="page-message">
            <h2>Contact</h2>
            <p>Send us a message</p>
          </div>
        </div>

        <div className="contact">
          <div id="contact-header">
            <h2>Contact Information</h2>
          </div>
          <div className="container-fluid">
            <div className="row contact-container">
              <div className="col-12 col-md-6">
                <div className="google-map">
                  <div id="map">
                    <h4>Location</h4>
                    <p>Centrally located in historic Czech Villiage, Cedar Rapids.</p>
                    <a
                      href="https://www.google.com/maps/place/Czech+Village,+Cedar+Rapids,+IA/@41.9693471,-91.6730898,12.75z/data=!4m5!3m4!1s0x87e4f76a1694022d:0xf04f757e08d3a14c!8m2!3d41.9665611!4d-91.6608876"
                      target="_blank"
                    >
                      <img src={locationMap} />
                    </a>
                    <p>click on map for directions</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact-form">
                  <form id="form" action="https://www.freecodecamp.org/email-submit" method="POST">
                    <h4>Contact Form</h4>
                    <div className="form-group">
                      <label id="name-label" htmlFor="name">
                        Name
                      </label>
                      <input type="text" className="form-control" id="name" placeholder="Enter full name" aria-describedby="nameHelp" />
                      <small id="nameHelp" className="form-text text-muted">
                        We'll never share your name with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label id="email-label" htmlFor="email">
                        Email address
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="e.g. fred@flintstones.com" aria-describedby="emailHelp" required />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="comments">Message</label>
                      <textarea className="form-control" id="comments" placeholder="Your message here"></textarea>
                    </div>

                    <div className="g-recaptcha" data-sitekey="6LeZ37cZAAAAAB1HP2DQtaPzTk7s0e70SwJlIzRW"></div>
                    <input id="submit" type="submit" className="btn btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
