import {SIGN_IN, SET_PASSWORD, SET_USER_NAME} from '../consts/LoginConsts';

export function signIn(userName, password) {
    return {
        type: SIGN_IN,
        userName: userName,
        password: password
    }
}

export function setUserName(value){
    return {
        type: SET_USER_NAME,
        userName: value
    }
}

export function setPassword(value){
    return {
        type: SET_PASSWORD,
        password: value
    }
}