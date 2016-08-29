import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'
import calenderReducer from './calender'

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    calender: calenderReducer
})
