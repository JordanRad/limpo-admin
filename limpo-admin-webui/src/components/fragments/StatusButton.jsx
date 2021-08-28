import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    btn: {
        margin: "0 4px",
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: "white",
        },
    }

}));
const StatusButton = (props) => {
    const classes = useStyles();
    let { id, active, label } = props
    return (<Button
        className={classes.btn}
        color="primary"
        variant={!active ? "text" : "contained"}
        onClick={(e) => props.onClick(id)}>{label}</Button>);
}

export default StatusButton;