import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record, List } from 'immutable'

const CommentModel = new Record({
    id: null,
    user: null,
    text: ''
})

const immutableComments = new List(normalizedComments.map(comment => new CommentModel(comment)))

export default (comments = immutableComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.push({...payload.comment, id: action.randomId})
    }

    return comments
}