import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import DataFilter from './datafilter'
import MoviePortal from './movieportal'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/datafilter' component={DataFilter}/>
      <Route path='/movieportal' component={MoviePortal}/>
    </Switch>
  </main>
)

export default Main
