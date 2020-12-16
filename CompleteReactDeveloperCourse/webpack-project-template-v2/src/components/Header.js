import React from 'react'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Martin Dwyer</h1>

      <ul>
        <li>
          <NavLink activeClassName='is-active' exact={true} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to='/portfolio/1'>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
