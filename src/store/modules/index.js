import { combineReducers } from 'redux'
import aboutReducer from './about'
import detailReducer from './detail'

export default combineReducers({
  aboutReducer,
  detailReducer
})
