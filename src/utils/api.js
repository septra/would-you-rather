import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer
} from './_DATA.js'

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}