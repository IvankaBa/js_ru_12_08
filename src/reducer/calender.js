import { FILTERED_ARTICLE } from '../constants'
import { articles as defaultArticles } from '../fixtures'

export default (articles = defaultArticles, action ) => {
    const { type, from, to} = action
    console.log('range ' + from + to)

    switch (type) {
        case FILTERED_ARTICLE:
            return articles.filter(article => article.id != payload.id)
    }

    return articles
}