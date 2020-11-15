import {MESSAGE} from '../consts/MainConsts'

export function setMessage(message) {
    return{
        type: MESSAGE,
        message: message
    }
}