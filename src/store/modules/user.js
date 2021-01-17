
import { setLocalStorage, getLocalStorage } from '@/utils/localStorage'
import { encryption } from '@/utils/util'
import { login } from '@/api/login'
import { setToken } from '@/utils/auth';

const user = {
    state: {
        access_token: getLocalStorage({
            name: 'access_token'
        })
    },
    mutations: {
        SET_ACCESS_TOKEN:(state,accessToken)=>{
            state.access_token = accessToken
            setLocalStorage({
                name:'access_token',
                content:state.access_token
            })
        }
    },
    actions: {
        //登录
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            return new Promise((resolve, reject) => {
                //密码加密
                const user = encryption({
                    data: { identifier: username, credential: password },
                    key: '1234567887654321',
                    param: ['credential']
                })
                login(user.identifier, user.credential).then(res => {
                    //若登录成功存入token，并修改store状态
                    setToken(res.data.access_token)
                    //setRefreshToken
                    commit('SET_ACCESS_TOKEN',res.data.access_token)
                    //commit('SET_REFRESH_TOKEN',res.data.access_token)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}