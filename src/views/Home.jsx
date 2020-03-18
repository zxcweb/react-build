import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Detail from '@views/Detail'

const Home = () => (
  <div>
    我是Home页:
    <Switch>
      <Redirect exact from="/home" to="/home/detail" />
      <Route path="/home/detail" component={Detail} />
    </Switch>
  </div>
)
export default Home
