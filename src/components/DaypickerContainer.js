import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { filteredCalender } from '../AC/calender'

class Daypicker extends Component {
    static propTypes = {

    };

    state = {
        from: null,
        to: null
    }

    render() {
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    selectedDays={this.handleSelect}
                    onDayClick={this.handleDayClick}
                />
                {this.getRangeTitle()}
            </div>
        )
    }

    handleSelect = day => DateUtils.isDayInRange(day, this.state)
    getRangeTitle() {
        const { from, to } = this.state
        filteredCalender(from, to)
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
    }
}

export default connect(null, { filteredCalender })(Daypicker)