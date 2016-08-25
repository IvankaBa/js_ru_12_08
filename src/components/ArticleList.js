import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleOpenItem: PropTypes.func.isRequired,
        isOpenItem: PropTypes.func.isRequired,
        filter: PropTypes.object
    }

    static defaultProps = {
        filter: {}
    }

    state = {
        isShow: true
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', this.props, nextProps)

        if (nextProps.filter !== this.props.filter) {
            this.setData
        }
    }

    setData = (date) => {
        let isShow = true
        const { fromDate, toDate } = this.props.filter
        if (fromDate !== null && toDate !== null) {
            const articleDate = new Date(date)
            if (fromDate > articleDate || toDate < articleDate) {
                isShow = false
            }
        }
        return isShow
    }

    getFilter () {
        const { fromDate, toDate } = this.props.filter
        if (fromDate !== 0 && toDate !== 0) {
            const articleDate = this.setData()
            if (fromDate > articleDate || toDate < articleDate) {
                this.setState({
                    isShow: false
                })
            }
        }
    }

    render() {
        const { articles, toggleOpenItem, isOpenItem } = this.props
        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                {this.setData(articleObject.date) ? <Article article = {articleObject}
                    isOpen = {isOpenItem(articleObject.id)}
                    toggleOpen = {toggleOpenItem(articleObject.id)}
                />:'Has not an article in this date filter'}
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default accordion(ArticleList)