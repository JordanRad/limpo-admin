import React from 'react';
import { Button, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Searchbar from '../components/searchbar/Searchbar';
import Heading from '../components/heading/Heading';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "90%",
        margin: "auto"
    },
    head: {
        marginBottom: theme.spacing(2),
        alignItems:"center"
    },

    button: {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          color: "white",
        },
        height:"35.8px"
      },
}));

const OrdersArchive = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid className={classes.head} container direction="row" justifyContent="space-between">
                <Heading text="Архив поръчки" imageUrl="./businessman.png"/>
            </Grid>
            
            
        </div>
    );
}

export default OrdersArchive;