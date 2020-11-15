import {Avatar, makeStyles} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            left: theme.spacing(15),
            top: theme.spacing(3)
        }
    },
    primary: {
        color: '#fff',
    }

}));

export default function LoginAvatar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar>
                <AccountCircleIcon className={classes.primary}/>
            </Avatar>
        </div>
    )
}