import {SET_LANG} from '../consts/LangConsts'

export function setLanguage(value) {
    return{
        type: SET_LANG,
        payload: value,
    }
}