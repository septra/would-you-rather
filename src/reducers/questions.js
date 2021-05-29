import { ANSWER_QUESTION, RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

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
        case ADD_QUESTION: {
            console.log('reducing add question in QUESTIONS')
            return state
        }
        default:
            return state
    }
}
