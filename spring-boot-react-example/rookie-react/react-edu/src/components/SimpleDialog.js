import React, {useContext} from "react";
import {Dialog, DialogTitle, ListItem, ListItemText} from '@material-ui/core';
import {I18nContext} from "../contexts/LangContext";

export default function Simple(props) {
    const {translate} = useContext(I18nContext);
    const {header, onClose, selectedValue, open, values} = props;

    const handleClose = () =>{
        onClose(selectedValue);
    };

    const handleListItemClick = value =>{
        onClose(value);
    };

    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="simple-dialog-title">
            <DialogTitle>{header}</DialogTitle>
            {
                values.map(value => {
                    return(
                        <ListItem key={value} autoFocus button onClick={() => handleListItemClick(value)}>
                            <ListItemText>{translate(value)}</ListItemText>
                        </ListItem>
                    )

                })
            }
        </Dialog>
    )

}