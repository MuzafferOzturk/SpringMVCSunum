import React, {useContext} from "react";
import {makeStyles, Fab} from '@material-ui/core';
import {Translate} from '@material-ui/icons';
import SimpleDialog from "./SimpleDialog";
import {I18nContext} from "../contexts/LangContext";
import {setLanguage} from '../actions/LangActions';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function LanguageFAB() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {translate, dispatch, langCode} = useContext(I18nContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        dispatch(setLanguage(value));
    };

    return(
        <div>
            <Fab className={classes.fab} color="primary" onClick={handleClickOpen}>
                <Translate/>
            </Fab>
            <SimpleDialog selectedValue = {langCode} open={open} onClose={handleClose} header={translate("select_language")} values={["tr", "en"]}/>
        </div>
    )
}