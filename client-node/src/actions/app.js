export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

//导出加一的方法
export function show_alert(message) {
    return {
        type: SHOW_ALERT,
        data: message
    }
}
export function hide_alert() {
    return {
        type: HIDE_ALERT
    }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export