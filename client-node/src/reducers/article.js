import {ARTICLE_LIST} from '../actions/article'

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
    console.log('article reducer state ↓');
    console.log(state);
    console.log('article reducer action ↓');
    console.log(action);
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign(state, {articles: action.data.list});
        default:
            return state;
    }
}
