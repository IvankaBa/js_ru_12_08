import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        console.log(range)
    }

    handleResetClick = (e) => {
        e.preventDefault()

        this.setState({
            from: null,
            to: null
        })
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state
        //а показывать этот  диапазон?
        return (
            <div>
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <DayPicker
                    ref="daypicker"
                    numberOfMonths={ 1 }
                    {/*сохрани эту функцию в метод, иначе она постоянно ининциализироваться будет, + лишний код в JSX*/}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                    />
                <a href="#" onClick={ this.handleResetClick }>Reset</a>
                <ArticleList articles = {this.props.articles} filter = { {fromDate: from, toDate: to} }/>
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default Container
