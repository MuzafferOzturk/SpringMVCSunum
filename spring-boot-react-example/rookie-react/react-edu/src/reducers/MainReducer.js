import {MESSAGE} from '../consts/MainConsts';

export const initialState = {
    message: "Empty"
};

export const MainReducer = (state, action) => {
    switch (action.type) {
        case MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
    }
};