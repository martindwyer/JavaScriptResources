import React, { Component } from "react";
import slideOne from "../images/home/carousel/01-home-page-feedback-focus.jpeg";
import slideTwo from "../images/home/carousel/price-monitoring-service-1536x855.jpeg";
import slideThree from "../images/home/carousel/chat-app-1536x864.png";
import slideFour from "../images/home/carousel/task-manager-api-home-page-1536x866.png";
import slideSix from "../images/home/carousel/thebird-1536x865.png";
import slideSeven from "../images/home/carousel/Careers-1536x864.jpeg";
import slideEight from "../images/home/carousel/gwcover-1536x868.jpeg";
import slideNine from "../images/home/carousel/pscover-1536x866.jpeg";
import iconOne from "../images/icons/html5.svg";
import iconTwo from "../images/icons/css3-alt.svg";
import iconThree from "../images/icons/js-square.svg";
import iconFour from "../images/icons/bootstrap.svg";
import iconFive from "../images/icons/react.svg";
import iconSix from "../images/icons/node.svg";
import iconSeven from "../images/icons/wordpress.svg";
import iconEight from "../images/icons/python.svg";

class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <div id="page-indicator">Portfolio</div>
        <div id="portfolio-header" className="site-header container-fluid">
          <div className="page-message">
            <h2>Portfolio</h2>
            <p>Select samples of our work</p>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="container-fluid">
            <div className="overview">
              <h3>Overview</h3>
              <p>
                The collection of websites and web applications here are constructed from a broad range of programming languages, but the most important thing about any application is that it meets
                functional and non-functional requirements. The websites and applications here offer a variety of solutions for issues like gathering customer feedback, communicating effectively,
                staying connected to friends, staying fit, getting employed and appreciating nature. And, of course, should you have any questions about the work here, please feel free to contact us
                directly.
              </p>
            </div>
          </div>

          <div id="carousel-container" className="container-fluid">
            <div className="carousel-button-holder">
              <a href="#portfolio-carousel" role="button" data-slide="prev">
                <i className="fas fa-caret-left fa-3x"></i>
                <span className="sr-only">Previous</span>
              </a>
            </div>

            <div id="portfolio-carousel" className="carousel slide" data-interval="false" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={slideOne} alt="Third slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Feedback Focus</h5>
                    <p>
                      The Feedback Focus web application is designed for businesses looking to stay in touch with their customers. The application offers interactive survey creation and automated
                      survey transmission to a list of customers. Feedback from emails is received, complied, and reported by the application. A demo of the site has been deployed to
                      <a href="https://customer-email-response-app.herokuapp.com/" target="_blank">
                        Heroku
                      </a>
                      . Code can be reviewed at
                      <a href="https://github.com/martindwyer/FeedbackFocusApp" target="_blank">
                        Github
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideTwo} alt="First slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Price Monitor Service</h5>
                    <p>
                      Utilizing Python, Flask, and MongoDB, Price Monitoring Service allows users to login and retrieve prices on select products. Once the products have been identified, the
                      application monitors the daily change in prices and notifies the user when target price limits have been reached. A
                      <a href="https://mdbytes-price-monitoring-svc.herokuapp.com/" target="_blank">
                        demo
                      </a>{" "}
                      of this application is deployed on Heroku and the code is available for review at
                      <a href="https://github.com/martindwyer/PriceMonitoringService" target="_blank">
                        Github
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideThree} alt="First slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Chat App</h5>
                    <p>
                      Utilizing Node, Express, JavaScript and Socket.io, ChatApp provides an interface for user login and a standard template for instant chat rooms with unlimited users. Using the
                      ChatApp, users can sign in creating their own unique user name, join an existing chat room or define a new one for personal use.  Once in a room, users can send and receive
                      public messages on the chat room message board, share their own geographic location to the group with a link to google maps. An administrative notice is given to room users when
                      a user joins or departs the room. A <a href="https://mdbytes-chat-app.herokuapp.com/">demo</a> of this application has been deployed to Heroku, and the
                      <a href="https://github.com/martindwyer/ChatApp" target="_blank" rel="noopener">
                        code
                      </a>{" "}
                      is available for review on Github.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideFour} alt="First slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Task Manager API</h5>
                    <p>
                      Utilzing Node, Express, JavaScript, MongoDB and the Sendgird mail API, the Task Manager API provides a RESTful Web Service which can be used for creating and managing user task
                      management. A <a href="https://mdbytes-task-manager-api.herokuapp.com/">demo </a>for this application has been deployed on Heroku, and code for this project is available for
                      review at <a href="https://github.com/martindwyer/TaskManagerAPI">GitHub</a>.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideSix} alt="First slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>The Bird</h5>
                    <p>
                      A straightforward PHP application to establish the foundation of a social network called "The Bird". It was originally written for development purposes and is one of Martin's
                      first full-stack applications.  Users can register and sign in through a home page.  Once authenticated, users can post updates as well as reviewing and interacting with the
                      posts of others.  The registration and posts both accept common picture data types including jpg, png, gif and svg. This project is deployed currently on a
                      <a href="https://thebird.mdbytes.com" target="_blank" rel="noopener">
                        Linux Web Server
                      </a>
                      . code for this project is available for review at
                      <a href="https://github.com/martindwyer/TheBird">GitHub</a>.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideSeven} alt="First slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Careers</h5>
                    <p>
                      An interactive employment application using HTML, CSS, JavaScript, jQuery and jQuery UI components to guide applicants through the application process.  Input is validated and
                      the applicant is guided to correct inputs that cannot be accepted.  For example, if an applicant marks that they have a prior felony, they are not allowed to submit their
                      application without writing an explanation. A <a href="https://employment-application.mdbytes.com/">demo</a> for this application has been deployed on an Apache web server, and
                      code for this project is available for review at <a href="https://github.com/martindwyer/EmploymentApplication">GitHub</a>.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideEight} alt="First slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Wild Things Nature Photography</h5>
                    <p>
                      The purpose of this WordPress blog is to promote preservation of wildlife habitat. The site was created with an original WordPress theme and has extensive photo gallery
                      functionality. Wild Things Nature Photography runs live at
                      <a href="https:gowildthings.com" target="_blank">
                        GoWildThings.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slideNine} alt="Second slide" />
                  <div className="carousel-caption d-none d-block">
                    <h5>Primal Strength Fitness and Training</h5>
                    <p>
                      This WordPress blog promotes strength and fitness through education, regular posts, and integration with an Instagram account. The site is live at
                      <a href="https://goprimalstrength.com" target="_blank">
                        GoPrimalStength.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-button-holder">
              <a href="#portfolio-carousel" role="button" data-slide="next">
                <i className="fas fa-caret-right fa-3x"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <hr />
          <div className="portfolio-icons">
            <figure className="portfolio-icon">
              <img src={iconOne} height="75" />
              <figcaption>Html 5</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconTwo} height="75" />
              <figcaption>CSS 3</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconThree} height="75" />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconFour} height="75" />
              <figcaption>Bootstrap</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconFive} height="75" />
              <figcaption>React</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconSix} height="75" />
              <figcaption>Node.js</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconSeven} height="75" />
              <figcaption>WordPress</figcaption>
            </figure>
            <figure className="portfolio-icon">
              <img src={iconEight} height="75" />
              <figcaption>Python</figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
