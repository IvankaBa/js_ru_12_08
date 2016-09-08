import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

function Comment(props) {
    if (!props.comment) return null
    const { comment: { user, text } } = props
    return (
        <p>
            {text}
            {decrateUser(user)}
        </p>
    )
}

function decrateUser(user) {
    return <strong>by {user}</strong>
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string.isRequired
    })
}

export default connect(({ comments }, props) => {
    return {
        comment: comments.find(comment => comment.id == props.commentId)
    }
})(Comment)