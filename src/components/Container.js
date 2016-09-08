import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import JqueryComponent from './JqueryComponent'
import Counter from './Counter'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import Filters from './Filters'
import { loadAllArticles, loadArticlesWithThunk } from '../AC/articles'

class Container extends Component {

    componentDidMount() {
        const { loaded, loading, loadAllArticles, loadArticlesWithThunk } = this.props
       // if (!loaded && !loading) loadAllArticles()
        if (!loaded && !loading) loadArticlesWithThunk()
    }

    render() {
        const { loading, articles } = this.props
        return (
            <div>
                <Counter />
                <Filters />
                <ArticleList articles = {articles} loading = {loading}/>
                <JqueryComponent items = {articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
//        console.log('---', findDOMNode(ref))
    }
}

export default connect((state) => {
    const { articles, filters } = state
    const selected = filters.get('selected')
    const dates = filters.get('dates')

    const filteredArticles = articles.get('entities').valueSeq()
        .filter(article => !selected.length || selected.includes(article.id))
        .filter(article => {
            const publisingDate = Date.parse(article.date)
            return (!dates.from || dates.from < publisingDate) && (!dates.to || dates.to > publisingDate)
        })

    const loading = articles.get('loading')
    const loaded = articles.get('loaded')

    return { articles: filteredArticles, loading, loaded }
}, { loadAllArticles, loadArticlesWithThunk })(Container)