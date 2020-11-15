import {Grid, makeStyles, Paper} from "@material-ui/core";
import React from "react";
import LoginAvatar from "./LoginAvatar";
import LoginUserName from "./LoginUserName";
import LoginPassword from "./LoginPassword";
import {LoginContextProvider} from '../../contexts/LoginContext';
import LoginButton from "./LoginButton";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: theme.spacing(15),
    }
}));

export default function LoginPage(props) {
    const classes = useStyles();
    return (
        <LoginContextProvider>
            <Grid
                container direction="column"
                justify="center" alignItems="center" className={classes.root}>
                <Paper>
                    <LoginAvatar/>
                    <LoginUserName/>
                    <LoginPassword/>
                    <LoginButton {...props}/>
                </Paper>
            </Grid>
        </LoginContextProvider>
    )
}