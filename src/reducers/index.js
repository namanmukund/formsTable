import { combineReducers } from 'redux'
import searchColumnValues from './searchColumnValues'
import populateNewData from './populateNewData'

const appReducer= combineReducers({
  searchColumnValues,
  populateNewData
})

export default appReducer
