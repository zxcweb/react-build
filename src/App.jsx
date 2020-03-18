import React from 'react'
import {
  Link, Switch, Route, Redirect
} from 'react-router-dom'
import Home from '@views/Home'
import About from '@views/About'
import logo from '@/static/images/logo.png'

const App = () => (
  <div id="box">
    <div id="logo">
      <img className="logo" src={logo} alt="" />
    </div>
    <h2>
      Welcome to React!
    </h2>
    <div>
      <Link to="/home" replace>HOME</Link>
      |
      <Link to="/about" replace>ABOUT</Link>
    </div>
    <div className="content">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </div>
)
export default App
