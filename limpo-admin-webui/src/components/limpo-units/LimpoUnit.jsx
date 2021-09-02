import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "18em",
        height: "14em",
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(3)
    },

    error: {
        color: theme.palette.error.main,
    },
    row:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom: theme.spacing(2)
    }
}));

export default function LimpoUnit(props) {
    const classes = useStyles();
    const { id, name, description } = props

    return (
        <Card className={classes.root}>
            <CardContent className={classes.description}>
                <div className={classes.row}>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                    <IconButton><DeleteForeverIcon className={classes.error} /></IconButton>
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description.length > 250 ? description.substring(0, 550) + "..." : description}
                </Typography>
            </CardContent>
        </Card>
    );
}