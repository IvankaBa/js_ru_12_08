import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'


class Daypicker extends Component {
    static propTypes = {
        changeDates: PropTypes.func.isRequired,
        dates: PropTypes.object.isRequired
    };

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

    handleSelect = day => DateUtils.isDayInRange(day, this.props.dates)
    getRangeTitle() {
        const { from, to } = this.props.dates
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const { dates, changeDates } = this.props
        const range = DateUtils.addDayToRange(day, dates);
        changeDates(range)
    }
}

export default Daypicker