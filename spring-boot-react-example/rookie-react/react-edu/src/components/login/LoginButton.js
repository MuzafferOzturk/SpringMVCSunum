import React, {useContext} from "react";
import {Button, Grid, makeStyles, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {LoginContext} from "../../contexts/LoginContext";
import {I18nContext} from "../../contexts/LangContext";
import auth from '../../auth/Auth';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        right: theme.spacing(2),
    }
}));

export default function LoginButton(props) {
    const classes = useStyles();
    const {translate} = useContext(I18nContext);
    const {userName, password, dispatch} = useContext(LoginContext);
    const [snackOpen, setSnackOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const signIn = () => {
        userName === "admin" && password === "admin"
            ? openForm(true)
            : openForm(false);
        setSnackOpen(true);
    };

    const openForm = isOpen => {
        if(isOpen){
            auth.login();
            props.history.push("/app");
        }
        setSuccess(isOpen)
    };

    const handleClose = (event, reason) => {
        setSnackOpen(false);
    };
    return (
        <div>
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="flex-end">
                <Button className={classes.button} variant="outlined" onClick={signIn}>
                    {translate("signIn_label")}
                </Button>
            </Grid>
            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
                {
                    success
                        ? <Alert variant="filled" severity="success">{translate("signIn_success_label")}</Alert>
                        : <Alert variant="filled" severity="error">{translate("signIn_error")}</Alert>
                }
            </Snackbar>
        </div>
    )

}