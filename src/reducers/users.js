import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.userid]: {
                    ...state[action.userid],
                    answers : Object.assign(
                        state[action.userid].answers, 
                        { [action.questionid]: action.option }
                    )
                }
            }
        default:
            return state
    }
}
