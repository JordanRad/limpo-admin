import { Typography } from '@material-ui/core';
import React from 'react';
import ServiceList from '../components/ServiceList';
import { makeStyles } from '@material-ui/core/styles';
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
}));
const Services = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                Вписани услуги
            </Typography>
            
            <ServiceList services ={services}/>
        </div>
    );
}

export default Services;