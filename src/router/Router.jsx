import React from 'react'
import {
  HashRouter as Router, Route, Switch
} from 'react-router-dom'
import App from '@/App'
import NotFound from '@views/NotFound'

export default () => (
  <Router>
    {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
    <Route path="/404" component={NotFound} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} /> */}
    <App>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
)
