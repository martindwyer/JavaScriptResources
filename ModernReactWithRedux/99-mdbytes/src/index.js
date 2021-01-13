import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import ServicePage from "./Components/ServicePage";
import PortfolioPage from "./Components/PortfolioPage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";
import PrivacyPage from "./Components/PrivacyPage";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/index.html" component={LandingPage} />
      <Route path="/services" component={ServicePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Footer path="/" />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
