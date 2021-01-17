import axios from 'axios'
import { isNotEmpty, isSuccess } from '@/utils/util'
import { getToken } from '@/utils/auth'
//配置请求根路径
// axios.defaults.baseURL = 'http://localhost:8001/v1/user'
// Vue.prototype.$http = axios ///?

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

//跨域请求，允许保存cookie  `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true
//创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    //超时
    timeout: 20000
})
//request拦截器
service.interceptors.request.use(config => {
    if (true) {
        const authorization = config.headers['Authorization']
        if (authorization === undefined || authorization.indexOf('Basic') === -1) {
            config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token
        }
    }
    return config
}, error => {

    console.log(error)
    // 对响应错误做点什么
    return Promise.reject(error);
})

//响应拦截器
service.interceptors.response.use(res => {
    //请求失败，弹出提示信息
    if (!isSuccess(res.data)) {
        console.log("响应失败")
    }
    return res
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);

})

export default service