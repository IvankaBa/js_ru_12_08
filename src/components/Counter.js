import React, { Component, PropTypes } from 'react'
import { increment } from '../AC/counter'
import { connect } from 'react-redux'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <a href = "#" onClick = {this.handleIncrement}>increment me</a>
            </div>
        )
    }

    handleIncrement = ev => {
        ev.preventDefault()
        this.props.wrappedIncrement()
        //store.dispatch(increment())
    }
}

export default connect((state) => {
    const { count } = state
    return { count }
}, {
    wrappedIncrement: increment
})(Counter)