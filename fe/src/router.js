import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landing'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} path="/" exact />
      </Switch>
    </Router>
  )
}
