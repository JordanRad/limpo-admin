import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flex: 1,
        alignItems:"center"

    },
}));

export default function Heading(props) {
    const classes = useStyles();
    const { text, imageUrl } = props

    return (
        <div className={classes.root} >
            <Typography variant="h4">
                {text}
            </Typography>
            <div>&nbsp;&nbsp;</div>
            {imageUrl !== "" ? <img alt={text} height="50px" src={imageUrl} /> : ""}
        </div>

    );
}