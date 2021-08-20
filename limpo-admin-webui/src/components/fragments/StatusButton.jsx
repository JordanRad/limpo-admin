import { Button } from '@material-ui/core';
import React from 'react';

const StatusButton = (props) => {
    let { id, active, label } = props
    return (<Button
        style={{ margin: "0 4px", }}
        size="small"
        variant={!active ? "text" : "contained"}
        onClick={(e) => props.onClick(id)}>{label}</Button>);
}

export default StatusButton;