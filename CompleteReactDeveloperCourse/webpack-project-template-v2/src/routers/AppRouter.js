import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'

import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/portfolio/:id' component={PortfolioPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
