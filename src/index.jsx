import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/router/Router'
import { Provider } from 'react-redux'
import store from './store'
import 'antd/dist/antd.css';
import '@/style/main.less'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
