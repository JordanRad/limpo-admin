import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "18em",
        height: "14em",
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(3)
    },

    error: {
        backgroundColor: theme.palette.error.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.error.light,
            borderColor: theme.palette.error.main,
            color: "black",
        },
        textAlign: "center",
        
    },
    serviceName: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:theme.spacing(2)
    }
}));

export default function LimpoUnit(props) {
    const classes = useStyles();
    const { id, name, description } = props

    return (
        <Card className={classes.root}>
            <CardContent className={classes.description}>
                <Typography className={classes.serviceName} gutterBottom variant="h6">
                    {name}
                    <Button size="small" className={classes.error}><DeleteForeverIcon /></Button>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description.length > 250 ? description.substring(0, 550) + "..." : description}
                </Typography>
            </CardContent>
        </Card>
    );
}