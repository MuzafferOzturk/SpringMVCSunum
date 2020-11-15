import React, {useReducer} from "react";
import {initialState, LoginReducer} from '../reducers/LoginReducer'


export const LoginContext = React.createContext(initialState);

export const LoginContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(LoginReducer, initialState);

    return (
        <LoginContext.Provider value={{...state, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
};