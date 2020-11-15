import React, {useReducer} from "react";
import {initialState, LangReducer} from '../reducers/LangReducers'

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(LangReducer, initialState);

    return(
        <I18nContext.Provider value={{...state, dispatch}}>
            {children}
        </I18nContext.Provider>
    )

};