import request from '@/utils/request';
const basicAuthorization = 'Basic ' + btoa('web_app:spring-microservice-exam-secret')
const baseUserUrl = '/v1/user/'
// export function login(identifier,credential){
//     const grantType = 'password'
//     const scope = 'read'
//     return request({
//         url:'/auth/oauth/token',
//         headers:{
//             'Authorization':basicAuthorization
//         },
//         method:'post',
//         params:{username:identifier,credential,grant_type: grantType,scope}
//     })
// }

export function getUser(query) {
    return request({
        url: baseUserUrl + 'getUser',
        method: 'get'
    })
}