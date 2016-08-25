import React, { Component } from 'react'
import Article from './Article'
import accordion from '../mixins/accordion'

const ArticleList = React.createClass({
    mixins: [accordion],
    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.state.openItemId === articleObject.id}
                    toggleOpen = {this.toggleOpenItem(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
})

export default ArticleList