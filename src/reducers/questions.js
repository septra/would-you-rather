import { ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.questionid] : {
                    ...state[action.questionid],
                    [action.option] : {
                        ...state[action.questionid][action.option],
                        votes : state[action.questionid][action.option].votes.concat([action.authedUser])
 
                    }
                }
            }
        default:
            return state
    }
}
