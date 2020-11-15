import React, {useContext} from "react";
import {FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput} from '@material-ui/core'
import clsx from 'clsx';
import {I18nContext} from '../../contexts/LangContext';
import {LoginContext} from '../../contexts/LoginContext';
import {setPassword} from '../../actions/LoginActions';
import {Visibility, VisibilityOff} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    textField: {
        width: '%20',
    },
}));

const LoginPassword = () => {
    const {translate} = useContext(I18nContext);
    const {password, dispatch} = useContext(LoginContext);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleChangePass = (event) => {
        dispatch(setPassword(event.target.value));
    };
    const handleClickShowPass = () => {
        setShowPassword(!showPassword);
    };

    const classes = useStyles();
    return (
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" color="secondary">
            <InputLabel htmlFor="outlined-adornment-password">
                {translate("password_label")}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                color="secondary"
                onChange={event => handleChangePass(event)}
                endAdornment={
                    <InputAdornment position={"end"}>
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPass}
                            edge="end">
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
    )
};

export default LoginPassword;