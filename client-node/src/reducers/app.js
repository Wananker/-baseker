import {SHOW_ALERT, HIDE_ALERT} from '../actions/app'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initState = {
    alertVisible: false,
    alertMessage: '',
};
export default function app(state = initState, action) {

    switch (action.type) {
        case SHOW_ALERT:
            return Object.assign(state, {alertVisible: true, alertMessage: action.data});
        case HIDE_ALERT:
            return Object.assign(state, {alertVisible: false});
        default:
            return state;
    }
}
