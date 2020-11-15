import React from 'react';
import Main from "./components/Main";
import {I18nContextProvider} from './contexts/LangContext'

function App() {
    return (
        <I18nContextProvider>
            <Main/>
        </I18nContextProvider>
    );
}

export default App;
