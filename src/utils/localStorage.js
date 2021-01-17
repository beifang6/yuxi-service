import { validatenull } from './validate';
/**
 * 存储localStorage
 */
export const setLocalStorage = (params) => {
    const {
        name,
        content,
        type
    } = params
    const obj = {
        dataType: typeof (content),
        content: content,
        type: type,
        datetime: new Date().getTime()
    }
    //存储到localStorage,localStorage只能存储字符串，需要使用JSON.stringify
    //将对象转为json字符串
    window.localStorage.setItem(name, JSON.stringify(obj))
}

export const getLocalStorage = (params) => {
    const {
        name
    } = params
    let obj = {}
    let content
    //通过name传入的值，在localStorage中查询
    obj = window.localStorage.getItem(name)
    if (validatenull(obj)) return
    obj = JSON.parse(obj)
    // 若根据dataType的类型，将obj的content赋值给变量content，最后返回变量content
    if (obj.dataType === 'string') {
        content = obj.content
    } else if (obj.dataType === 'number') {
        content = Number(obj.content)
    } else if (obj.dataType === 'object') {
        content = obj.content
    }
    return content
}