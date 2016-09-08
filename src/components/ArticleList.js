import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import CSSTransition from 'react-addons-css-transition-group'
import './articleList.css'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,
        loading: PropTypes.bool,
        //from accordion decorator
        toggleOpenItem: PropTypes.func.isRequired,
        isOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, loading, toggleOpenItem, isOpenItem } = this.props
        if (loading) return <h1>Loading...</h1>

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {isOpenItem(articleObject.id)}
                    toggleOpen = {toggleOpenItem(articleObject.id)}
                />
            </li>)
        return (
            <CSSTransition component="ul" transitionName="article" transitionLeaveTimeout ={1000} transitionEnterTimeout = {500}>
                {articleItems}
            </CSSTransition>
        )
    }
}

export default accordion(ArticleList)