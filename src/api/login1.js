import request from '@/utils/request';
const baseOrderUrl ='/v1/order/'


export function getOrder(){
    return request({
        url:baseOrderUrl+'getOrder',
        method:'get'
    })
}