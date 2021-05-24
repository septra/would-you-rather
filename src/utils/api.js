import {
    _getUsers,
    _getQuestions,
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getTweets(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}