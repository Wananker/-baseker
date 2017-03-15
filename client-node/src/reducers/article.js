import {ARTICLE_LIST, ARTICLE_EDIT} from '../actions/article'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initState = {
    articles: [],
    article: {
        id: null, title: null, brief: null, content: null
    },
    validationState: {
        title: null, brief: null, content: null
    }
};
export default function article(state = initState, action) {
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign(state, {articles: action.data.list});
        case ARTICLE_EDIT:
            return Object.assign(state, {article: action.data});

        default:
            return state;
    }
}
