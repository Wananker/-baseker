import {ARTICLE_LIST, ARTICLE_EDIT, ARTICLE_ADD, ARTICLE_VIEW} from '../actions/article'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initState = {
    articlePage: {pageNum: 1, pageSize: 2, pages: 1, list: []},
    article: {id: null, title: null, brief: null, content: null},
    view: false
};
export default function article(state = initState, action) {
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign(state, {articlePage: action.data});
        case ARTICLE_ADD:
            return Object.assign(state, {article: {id: null, title: null, brief: null, content: null}, view: false});
        case ARTICLE_EDIT:
            return Object.assign(state, {article: action.data, view: false});
        case ARTICLE_VIEW:
            return Object.assign(state, {article: action.data, view: true});
        default:
            return state;
    }
}
