import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'

import AddExpensePage from '../components/AddExpensePage'
import DashboardPage from '../components/DashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
