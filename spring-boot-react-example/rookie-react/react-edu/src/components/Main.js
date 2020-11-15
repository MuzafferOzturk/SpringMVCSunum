import React from "react";
import LanguageFAB from "./LanguageFAB";
import LoginPage from './login/LoginPage';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Body from "./Body";
import {ProtectedRoute} from "../navigation/ProtectedRoute";

const themeX = createMuiTheme({
    palette: {
        type: "dark",
        grey: {
            800: "#3c3f41", // overrides failed
            900: "#3c3f41" // overrides successw
        },
        background: {
            paper: "#3c3f41"
        }
    }
});

export default function Main() {
    return (
        <MuiThemeProvider theme={themeX}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={props => <LoginPage {...props}/>}/>
                    <ProtectedRoute exact path="/app" component={Body}/>
                    <Route path="*" component={() => "404 NOT FOUND"}/>
                </Switch>
            </BrowserRouter>
            <LanguageFAB/>
        </MuiThemeProvider>
    )
}