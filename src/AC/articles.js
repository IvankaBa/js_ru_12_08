import { LOAD_ARTICLE_BY_ID, DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleById(id) {
    return {
        type: LOAD_ARTICLE_BY_ID,
        payload: { id },
        callAPI: `/api/article/${id}`
    }
}

export function loadArticlesWithThunk() {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })

        $.get('/api/article')
            .done(response => dispatch({
                type: LOAD_ALL_ARTICLES + SUCCESS,
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ALL_ARTICLES + FAIL,
                error
            }))
    }
}