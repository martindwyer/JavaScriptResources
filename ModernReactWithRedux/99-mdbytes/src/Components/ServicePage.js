import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import wireFrame from "../images/home/wireframe.jpeg";
import office from "../images/home/office-1209640-350x234.jpg";
import businessMeeting from "../images/home/business-meeting-1238188-1.jpeg";
import iconOne from "../images/icons/globe.svg";
import iconTwo from "../images/icons/sitemap.svg";
import iconThree from "../images/icons/mobile-alt.svg";
import iconFour from "../images/icons/wordpress.svg";
import iconFive from "../images/icons/cash-register.svg";
import iconSix from "../images/icons/thumbs-up.svg";
import iconSeven from "../images/icons/lightbulb.svg";
import featureOne from "../images/home/carousel/01-home-page-feedback-focus.jpeg";
import featureTwo from "../images/home/carousel/gwcover-1536x868.jpeg";

class ServicePage extends Component {
  render() {
    return (
      <div>
        <div className="site-header container-fluid">
          <div className="page-message">
            <h2>Services</h2>
            <p>An overview of the what we do</p>
          </div>
        </div>

        <div id="services-container">
          <div className="container-fluid">
            <div id="page-indicator">Services</div>
            <div className="overview">
              <h3>Overview</h3>
              <p>
                An over-arching theme in all our work is a commitment to the{" "}
                <a href="https://agilemanifesto.org/principles.html" target="_blank">
                  Agile Manifesto
                </a>
                , i.e. a commitment to individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation,
                responding to change over following a plan.
              </p>
            </div>

            <div id="services">
              <div className="card service-card">
                <img src={wireFrame} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Design</h5>
                  <p className="card-text">
                    Regardless of your businesss object, the right design will include clear requirements, application diagrams, and prototypes. Timelines and deliverables are clearly documented.
                  </p>
                </div>
              </div>
              <div className="card service-card">
                <img src={office} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Development</h5>
                  <p className="card-text">
                    From coding to deployment, development is our top priority. Most of our solutions are coded and deployed out of our home office, but reliable third-party providers also assist on
                    larger projects.
                  </p>
                </div>
              </div>
              <div className="card service-card">
                <img src={businessMeeting} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">
                    In a world where the only constant is change, we take pride in being there as requirements for your business change. We operate with a variety of service levels depending on your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row servies-two">
              <div className="col-12" id="services-icons">
                <figure className="service-icon">
                  <img src={iconOne} height="75" alt="service img" />
                  <figcaption>Mobile-Ready Websites</figcaption>
                </figure>

                <figure className="service-icon">
                  <img src={iconTwo} height="75" alt="service img" />
                  <figcaption>Integrated Business Applications</figcaption>
                </figure>
                <figure className="service-icon">
                  <img src={iconThree} height="75" alt="service img" />
                  <figcaption>Mobile Applications</figcaption>
                </figure>
                <figure className="service-icon">
                  <img src={iconFour} height="75" alt="service img" />
                  <figcaption>Blogs</figcaption>
                </figure>
                <figure className="service-icon">
                  <img src={iconFive} height="75" alt="service img" />
                  <figcaption>e-Commerce Solutions</figcaption>
                </figure>
                <figure className="service-icon">
                  <img src={iconSix} height="75" alt="service img" />
                  <figcaption>Social Media</figcaption>
                </figure>
                <figure className="service-icon">
                  <img src={iconSeven} height="75" alt="service img" />
                  <figcaption>Consultation</figcaption>
                </figure>
              </div>
            </div>
            <hr />
            <div id="service-highlights">
              <h5>Integrated business applications, websites, and more ...</h5>
              <div className="row">
                <div className="col-12 col-md-6">
                  <img src={featureOne} alt="service img" />
                </div>
                <div className="col-12 col-md-6">
                  <img src={featureTwo} alt="service img" />
                </div>
              </div>

              <h5>
                Details for these and more on our <NavLink to="/portfolio">portfolio page</NavLink>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePage;
