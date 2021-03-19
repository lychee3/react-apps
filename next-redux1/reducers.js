import { combineReducers } from 'redux'
import * as types from './types'

export const initMessageData = {
  data: [{message: 'サンプルメッセージ'}, {message: '明日の天気は晴れです。'}],
  info: 'メッセージを入力してください。',
}

const messageReducer = (state = initMessageData, action) => {
  switch (action.type) {
    case types.ADD:
      let newdata = state.data.slice();
      newdata.unshift({message: action.message});
      return {
        data: newdata,
        info: 'メッセージを追加しました。',
      };
    default:
      return state;
  }  
}

// COMBINED REDUCERS
const reducers = {
  message: messageReducer,
}

export default combineReducers(reducers)