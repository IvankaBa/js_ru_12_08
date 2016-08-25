import React, { Component, PropTypes } from 'react'

class JqueryComponent extends Component {
    static propTypes = {

    };

    componentDidMount() {
        console.log('---', this.refs.container)
    }

    render() {
        return (
            <div ref="container" >Hello world</div>
        )
    }
}

export default JqueryComponent