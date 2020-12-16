import React from 'react'
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'

const PortfolioPage = props => {
  let currentPage = 0
  if (props.match.params.id) {
    currentPage = parseInt(props.match.params.id)
  }
  let nextPage = currentPage + 1
  let nextPagePath = '/portfolio/' + nextPage
  return (
    <div>
      Porfolio Item id: {currentPage}
      <div>
        <Link to={nextPagePath}>Next Page</Link>
      </div>{' '}
    </div>
  )
}

export default PortfolioPage
