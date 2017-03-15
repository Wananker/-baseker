import {combineReducers} from 'redux'
import counter from './counter'
import app from './app'
import article from './article'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    counter,
    article,
    app
});

export default rootReducer
