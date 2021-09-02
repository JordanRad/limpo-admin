import { Button, Typography, Grid } from '@material-ui/core';
import React from 'react';
import LimpoUnitsList from '../components/limpo-units/LimpoUnitsList';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
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
const LimpoUnitsPage = () => {
    const classes = useStyles();
    let history = useHistory();

    const onAddLimpoUnitClick =(e)=> history.push("./newlimpounit")
    return (
        <div className={classes.root}>
            <Grid className={classes.head} container direction="row" justifyContent="space-between">
                <Typography gutterBottom variant="h5">
                    Вписани услуги
                </Typography>
                <Button onClick={onAddLimpoUnitClick} className={classes.button} variant="outlined">Добави услуга</Button>
            </Grid>

            <LimpoUnitsList services={services} />
        </div>
    );
}

export default LimpoUnitsPage;