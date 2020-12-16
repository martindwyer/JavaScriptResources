import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const appTarget = document.querySelector('#app')

ReactDOM.render(<AppRouter />, appTarget)
