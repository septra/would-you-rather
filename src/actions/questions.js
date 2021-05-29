export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function _answerQuestion (user, questionid, option) {
    return {
        type: ANSWER_QUESTION,
        authedUser: user,
        questionid,
        option
    }
}

export function answerQuestion(questionid, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(_answerQuestion(authedUser, questionid, option))
    }
}