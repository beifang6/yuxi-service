/**
 * 加密处理
 */
export const encryption = (params) => {
    var {
        data,
        type,
        param,
        key
    } = params
    // 序列化对象 data form 表单传过来的
    const result = JSON.parse(JSON.stringify(data))
    if (type === 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele])
        })
    } else {
        param.forEach(ele => {
            var data = result[ele]
            key = CryptoJS.enc.Latin1.parse(key)
            var iv = key
            var encrypted = CryptoJS.AES.encrypt(
                data,
                key,
                {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.ZeroPadding
                })
            result[ele] = encrypted.toString()
        })
    }
    return result
}


/**
 * 判断对象是否为空
 * @param {*} obj 
 * @returns {boolean}
 */
export const isNotEmpty = (obj)=>{
    let flag = true
    if(obj ==='' || obj ===null || obj===undefined || obj ==='undefined'){
        flag = false
    }
    return flag
}

/**
 * 判断响应是否成功
 * @param {} response 
 */
export const isSuccess = (response)=>{
    let success = true
    if(!isNotEmpty(response)||(response.code!==undefined&&response.code!==200)){
        success = false
    }
    return success
}