import {show_alert} from './app'
import {URL_ARTICLE_LIST, URL_ARTICLE_VIEW, URL_ARTICLE_DELETE, URL_ARTICLE_SAVE} from '../constants/AppConfig'

export const ARTICLE_LIST = 'ARTICLE_LIST';
export const ARTICLE_EDIT = 'ARTICLE_EDIT';
export const ARTICLE_EDIT_INPUT = 'ARTICLE_EDIT_INPUT';
export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_VIEW = 'ARTICLE_VIEW';

export function article_init(pageNum = 1, pageSize = 5) {
    return (dispatch, getState) => {
        //获取state对象中的counter属性值
        // const { counter } = getState()
        let promise = $.ajax({
            url: URL_ARTICLE_LIST,
            data: JSON.stringify({pageNum: pageNum, pageSize: pageSize}),
            dataType: 'json',
            type: 'post',
            contentType: 'application/json;charset=utf-8'
        });
        promise.done(function (vo) {
            dispatch(handle_vo(vo, ARTICLE_LIST))
        });
        promise.fail(function (error) {
            console.log(error)
        });
    }
}

export function article_add() {
    return {type: ARTICLE_ADD}
}


export function handle_vo(vo, type) {
    if (!vo.ok) dispatch(show_alert(vo.msg));
    return {
        type: type,
        data: vo.data
    }
}


export function article_edit(id) {
    return (dispatch, getState) => {
        let promise = $.ajax(URL_ARTICLE_VIEW + id);
        promise.done(function (vo) {
            dispatch(handle_vo(vo, ARTICLE_EDIT))
        });
        promise.fail(function (error) {
            console.log(error)
        });
    }
}

export function article_view(id) {
    return (dispatch, getState) => {
        let promise = $.ajax(URL_ARTICLE_VIEW + id);
        promise.done(function (vo) {
            dispatch(handle_vo(vo, ARTICLE_VIEW))
        });
        promise.fail(function (error) {
            console.log(error)
        });
    }
}


export function article_save(article) {
    return (dispatch, getState) => {
        let promise = $.ajax(URL_ARTICLE_VIEW + id);
        promise.done(function (vo) {
            dispatch(handle_vo(vo, ARTICLE_EDIT))
        });
        promise.fail(function (error) {
            console.log(error)
        });
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