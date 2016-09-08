import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        user: '',
        text: '',
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    text: <input value = {this.state.text} onChange = {this.handleChange('text')} />
                    user: <input value = {this.state.user} onChange = {this.handleChange('user')} />
                    <input type = 'submit' />
                </form>
            </div>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { addComment, articleId } = this.props
        addComment(this.state, articleId)

        this.setState({
            text: ''
        })
    }
}

export default connect(null, { addComment })(NewCommentForm)