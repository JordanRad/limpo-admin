
import React, { useEffect, useState } from 'react';
import LimpoUnitsList from '../components/limpo-units/LimpoUnitsList';
import { Button, Grid, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Heading from '../components/heading/Heading';
import OrderService from '../services/OrderService';
const services = [
    { name: "Почистване на етаж", description: "Услугата включва почистване на 1 бр. етаж в жилищна кооперация.Услугата включва почистване на 1 бр. етаж в жилищна кооперация.Услугата включва почистване на 1 бр. етаж в жилищна кооперация." },
    { name: "Почистване на етаж", description: "Услугата включва почистване на 1 бр. етаж в жилищна кооперация.Услугата включва почистване на 1 бр. етаж в жилищна кооперация." },
    { name: "Почистване на етаж", description: "Услугата включва почистване на 1 бр. етаж в жилищна кооперация.Услугата включва почистване на 1 бр. етаж в жилищна кооперация.Услугата включва почистване на 1 бр. етаж в жилищна кооперация." },
    { name: "Почистване на етаж", description: "Услугата включва почистване на 1 бр. етаж в жилищна кооперация." },
    { name: "Почистване на етаж", description: "Услугата включва почистване на 1 бр. етаж в жилищна кооперация." }
]

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
        alignItems: "center"
    },

    button: {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: "white",
        },
        height: "35.8px"
    },
    progress: {
        marginBottom: theme.spacing(1),
        height: "2em"
    },
}));
const LimpoUnitsPage = () => {
    const classes = useStyles();
    let history = useHistory();
    const [limpoUnits, setLimpoUnits] = useState(undefined)
    const onAddLimpoUnitClick = (e) => history.push("./newlimpounit")

    const fetchLimpoUnits = async () => {
        let limpoUnitsUrl = "/limpoUnits/"
        const response = await OrderService.get(limpoUnitsUrl)
        console.log(response)
        return response
    }

    useEffect(async () => {
        let response = await fetchLimpoUnits();
        setLimpoUnits(response)

    }, [])

    if (limpoUnits === undefined) {
        return (
            <div className={classes.root}>
                <Grid className={classes.head} container direction="row" justifyContent="space-between">
                    <Heading text="Вписани услуги" imageUrl="./cleaning.png" />
                    <Button onClick={onAddLimpoUnitClick} className={classes.button} variant="outlined">Добави услуга</Button>
                </Grid>

                <LinearProgress className={classes.progress} />
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <Grid className={classes.head} container direction="row" justifyContent="space-between">
                    <Heading text="Вписани услуги" imageUrl="./cleaning.png" />
                    <Button onClick={onAddLimpoUnitClick} className={classes.button} variant="outlined">Добави услуга</Button>
                </Grid>

                <LimpoUnitsList limpoUnits={limpoUnits} />
            </div>
        );
    }
}

export default LimpoUnitsPage;