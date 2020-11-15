import React, {useReducer} from "react";
import {initialState, MainReducer} from '../reducers/MainReducer';

export const MainContext = React.createContext(initialState);

export const MainContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MainReducer, initialState);

    return(
        <MainContext.Provider value={{...state, dispatch}}>
            {children}
        </MainContext.Provider>
    )
};