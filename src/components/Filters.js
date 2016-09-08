import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import DaypickerContainer from './DaypickerContainer'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { changeSelectedFilter, changeDateFilter } from '../AC/filters'

class Filters extends Component {
    render() {
        const { articles, filters, changeDateFilter } = this.props
        const options = articles.valueSeq().map(article => ({
            label: article.title,
            value: article.id
        })).toJS()

        return (
            <div>
                <Select options = {options} value={filters.get('selected')} onChange = {this.handleChange} multi={true}/>
                <DaypickerContainer dates = {filters.get('dates')} changeDates = {changeDateFilter}/>
            </div>
        )
    }

    handleChange = (selected) => {
        this.props.changeSelectedFilter(selected.map(option => option.value))
    }
}

export default connect(state => {
    const { articles, filters } = state
    return { articles, filters }
}, {
    changeSelectedFilter, changeDateFilter
})(Filters)