//HOC - higher order component
//decorator
import React from 'react'

export default (Component) => {
    return class AccordionDecorator extends React.Component {
        state = {
            openItemId: null
        }

        toggleOpenItem = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openItemId: id == this.state.openItemId ? null : id
            })
        }

        isOpenItem = id => this.state.openItemId === id

        render() {
            return <Component {...this.props} isOpenItem = {this.isOpenItem} toggleOpenItem = {this.toggleOpenItem} {...this.state}/>
        }
    }
}