import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/home'
import Video from '../components/video'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/video' component={Video} />
    </Switch>
  </main>
)

export default Main
