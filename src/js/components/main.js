import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/home'
import Video from '../components/video'
<<<<<<< HEAD

=======
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/video' component={Video} />
    </Switch>
  </main>
)

export default Main
