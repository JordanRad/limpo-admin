import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton, Grid, Container, Paper } from '@material-ui/core';
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