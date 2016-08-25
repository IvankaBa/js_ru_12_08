import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleOpenItem: PropTypes.func.isRequired,
        isOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', this.props, nextProps)
    }

    render() {
        const { articles, toggleOpenItem, isOpenItem } = this.props
        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {isOpenItem(articleObject.id)}
                    toggleOpen = {toggleOpenItem(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default accordion(ArticleList)