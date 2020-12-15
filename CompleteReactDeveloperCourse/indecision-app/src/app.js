import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const appTarget = document.querySelector('#app')

ReactDOM.render(<IndecisionApp />, appTarget)
