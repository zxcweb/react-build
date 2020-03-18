import { /**  applyMiddleware, */ createStore } from 'redux'
// import thunk from 'redux-thunk'
import reducers from './modules'

const store = createStore(
  reducers
  // applyMiddleware(thunk)
)
export default store
