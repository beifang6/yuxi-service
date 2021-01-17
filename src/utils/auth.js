import {setLocalStorage,getLocalStorage} from './localStorage';

export function getToken(){
    return getLocalStorage({name:'access_token'})
}

export function setToken(token){
    return setLocalStorage({name:'access_token'},token)
}