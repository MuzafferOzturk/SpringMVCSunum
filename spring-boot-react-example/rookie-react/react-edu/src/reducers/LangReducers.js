import TR from '../resources/tr';
import EN from '../resources/en';
import {SET_LANG} from '../consts/LangConsts';

const translations = {
    en: EN,
    tr: TR
};

const getTranslate = langCode => key => translations[langCode][key] || key;
export const initialState = {
    langCode: "en",
    translate: getTranslate("en"),
};

export const LangReducer = (state, action) =>{
    switch (action.type) {
        case SET_LANG:
            return {
                langCode: action.payload,
                translate: getTranslate(action.payload),
            };
        default:
            return {...initialState};
    }
};