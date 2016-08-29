import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'

export default combineReducers({
    count: counterReducer,
    articles: articleReducer
})
