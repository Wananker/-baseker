import {ARTICLE_LIST, ARTICLE_EDIT, ARTICLE_ADD, ARTICLE_VIEW} from '../actions/article'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initState = {
    articles: [],
    article: {id: null, title: null, brief: null, content: null},
    view: false
};
export default function article(state = initState, action) {
    console.log(`action == ${JSON.stringify(action)}`);
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign(state, {articles: action.data.list});
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
