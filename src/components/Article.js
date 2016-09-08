import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import { deleteArticle, loadArticleById } from '../AC/articles'

class Article extends Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, loadArticleById, article }) {
        if (isOpen && !this.props.isOpen) loadArticleById(article.id)
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        const { text, title } = article
        if (article.loading) return <h1>Loading...</h1>
        const body = isOpen ? <section>{text}<CommentList article = {article}/></section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete article</a>
                {body}
            </div>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle, loadArticleById })(Article)