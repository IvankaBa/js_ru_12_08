import React, { Component, PropTypes } from 'react'

class CommentCount extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.count != nextProps.count
    }

    render() {
        console.log('---', 'rerendering')
        return (
            <strong>
                {this.props.count}
            </strong>
        )
    }
}

export default CommentCount