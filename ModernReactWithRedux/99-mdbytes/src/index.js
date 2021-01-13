import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import ServicePage from "./components/ServicePage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import PrivacyPage from "./components/PrivacyPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle";

import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <div>
    <Router>
      <ScrollToTop />
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/index.html" component={LandingPage} />
      <Route path="/services" component={ServicePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Footer path="/" />
    </Router>
  </div>,
  document.getElementById("root")
);
