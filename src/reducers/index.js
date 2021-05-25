import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import loading from './loading'
import { LOGOUT } from '../actions/authedUser'

export default combineReducers({
  authedUser,
  users,
  questions,
  loading,
})

// export default (state, action) =>
//   rootReducer(action.type === LOGOUT ? undefined : state, action);