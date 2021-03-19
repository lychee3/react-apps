import { combineReducers } from 'redux'
import * as types from './types'

// 今回は使用しないためダミー

const initData = {
  isFetching: false,
  pictures: []
}

const xxxReducer = (state = initData, action) => {
  return state;
}

// COMBINED REDUCERS
const reducers = {
  xxx: xxxReducer
}

export default combineReducers(reducers)