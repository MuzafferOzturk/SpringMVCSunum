import {SIGN_IN, SET_PASSWORD, SET_USER_NAME} from '../consts/LoginConsts';

export const initialState = {
    userName: "",
    password: "",
    repeatCount: 0
};

export const LoginReducer = (state, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {

            };
        case SET_USER_NAME: {
            return {
                ...state,
                userName: action.userName
            }
        }
        case SET_PASSWORD:{
            return {
                ...state,
                password: action.password
            }
        }
        default:
            return {...initialState};

    }
};