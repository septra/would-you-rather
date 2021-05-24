import { getInitialData } from '../utils/api'

export function handleInitialData () {
  return (dispatch) => {
    // dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        // dispatch(hideLoading())
      })
  }
}
