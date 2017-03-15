import {show_alert} from './app'
export const ARTICLE_LIST = 'ARTICLE_LIST';
export const ARTICLE_EDIT = 'ARTICLE_EDIT';

export function article_list(vo) {
    console.log('article_list vo ↓');
    console.log(vo);
    if (!vo.ok) show_alert();
    return {
        type: ARTICLE_LIST,
        data: vo.data
    }
}export function article_edit(vo) {
    if (!vo.ok) show_alert();
    return {
        type: ARTICLE_EDIT,
        data: vo.data
    }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export