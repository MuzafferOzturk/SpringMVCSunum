import React, {useContext} from "react";
import {makeStyles, TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {I18nContext} from "../../contexts/LangContext";
import {LoginContext} from "../../contexts/LoginContext";
import Grid from "@material-ui/core/Grid";
import {setUserName} from '../../actions/LoginActions'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(2),
    },
}));

export default function LoginUserName() {
    const classes = useStyles();
    const {translate} = useContext(I18nContext);
    const {userName, dispatch} = useContext(LoginContext);
    const handleChange = (event) => {
        dispatch(setUserName(event.target.value));
    };
    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems={"flex-end"}>
                <Grid item>
                    <AccountCircle/>
                </Grid>
                <Grid>
                    <TextField id="input-with-icon-grid"
                               color="secondary"
                               label={translate("userName_label")}
                                onChange={event => handleChange(event)}
                                value={userName}/>
                </Grid>
            </Grid>
        </div>
    )
}

