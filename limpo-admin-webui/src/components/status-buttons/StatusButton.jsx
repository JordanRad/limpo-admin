import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalStateValue } from '../../context/GlobalStateProvider';
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
    const dispatch = useGlobalStateValue()[1]
    let { id, active, label } = props
    return (<Button
        className={classes.btn}
        color="primary"
        variant={!active ? "text" : "contained"}
        onClick={(e) => dispatch({type:"update status filter",payload:id})}>{label}</Button>);
}

export default StatusButton;