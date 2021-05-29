import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

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
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers : Object.assign(
                        state[action.authedUser].answers, 
                        { [action.questionid]: action.option }
                    )
                }
            }
        case ADD_QUESTION: {
            console.log('reducing add question in users')
            return state
        }
        default:
            return state
    }
}
