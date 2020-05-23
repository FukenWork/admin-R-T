
import { UserInfo } from '../types/index';
import * as constants from '../actions/constants';
import { combineReducers } from 'redux'


function saveUserInfo(state: UserInfo, action: any) {
  switch (action.type) {
    case constants.SAVE_USERINFO:
      return state = action.data
    default:
      break;
  }
  return state || {}
}

// 这样可以吧store变成一个对象来组合reducer = state
const reducer = combineReducers({
  saveUserInfo
})

export default reducer