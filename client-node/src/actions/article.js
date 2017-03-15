import {show_alert} from './app'
import {URL_ARTICLE_LIST, URL_ARTICLE_VIEW, URL_ARTICLE_DELETE, URL_ARTICLE_SAVE} from '../constants/AppConfig'

export const ARTICLE_LIST = 'ARTICLE_LIST';
export const ARTICLE_EDIT = 'ARTICLE_EDIT';

export function article_list(vo) {
    if (!vo.ok) show_alert();
    return {
        type: ARTICLE_LIST,
        data: vo.data
    }
}

export function article_init() {
    return (dispatch, getState) => {
        //获取state对象中的counter属性值
        // const { counter } = getState()
        let promise = $.ajax(URL_ARTICLE_LIST);
        promise.done(function (vo) {
            dispatch(article_list(vo))
        });
        promise.fail(function (error) {
            console.log(error)
        });
    }
}

export function article_edit(vo) {
    if (!vo.ok) show_alert();
    return {
        type: ARTICLE_EDIT,
        data: vo.data
    }
}

export function article_delete(id) {
    return (dispatch, getState) => {
        //获取state对象中的counter属性值
        // const { counter } = getState()
        let promise = $.ajax(URL_ARTICLE_DELETE + id, {
            type: 'delete'
        });
        promise.done(function (vo) {
            if (!vo.ok) show_alert();
            dispatch(article_init())
        });
        promise.fail(function (error) {
            console.log(error)
        });
    }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export