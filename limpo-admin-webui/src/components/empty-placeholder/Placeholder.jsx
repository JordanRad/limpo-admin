import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flex: 1,
        alignItems:"flex-start",
        marginBottom:theme.spacing(1),
        padding:theme.spacing(2),
        border: "2px solid "+theme.palette.primary.dark,
        backgroundColor:theme.palette.primary.main

    },
}));

export default function Placeholder(props) {
    const classes = useStyles();
    const { text} = props

    return (
        <div className={classes.root} >
            <Typography variant="body1">
                {text}
            </Typography>
        </div>

    );
}