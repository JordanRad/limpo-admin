import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import OrderService from '../../../services/OrderService';
const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4em",
        margin:theme.spacing(0,2),
        paddingRight:theme.spacing(6)
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
    save: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        "&:hover": {
            borderColor: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.dark,
        },
        textAlign: "center",
    },
}));

const getPromoteStatus = (status) => {
    switch (status) {
        case "NEW":
            return "Чакаща"
        case "PENDING":
            return "Одобрена"
        case "APPROVED":
            return "Завършена"
        default:
            return "Чакаща"
    }
}

const promote = (status) => {
    switch (status) {
        case "NEW":
            return "PENDING"
        case "PENDING":
            return "APPROVED"
        case "APPROVED":
            return "COMPLETED"
        default:
            return "COMPLETED"
    }
}
const OrderActions = (props) => {
    const classes = useStyles()
    let { order } = props

    const onPromoteClick = async (order)=>{
        let confirmMessage = window.confirm("Сигурни ли сте, че искате да промените статуса поръчката?");

        if (confirmMessage) {
            
            let newStatus = promote(order.status)
            let url = `/orders/${order.orderNumber}?status=${newStatus}`
        
            let response = await OrderService.put(url)
            
            if(response !== undefined){
                window.location.reload()
            }
        }
    }

    const onDeleteClick = async (orderNumber)=>{
        let confirmMessage = window.confirm("Сигурни ли сте, че искате да изтриете поръчката?");

        if (confirmMessage) {
            await OrderService.delete("/orders/" + orderNumber)
            window.location.reload()
        }
    }

    return (
        <Container className={classes.row}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Typography>Запиши поръчката като: &nbsp;</Typography>
                <Button
                    className={classes.save}
                    onClick={(e)=>onPromoteClick(order)}
                    variant="outlined">
                    {getPromoteStatus(order.status)}
                </Button>
            </Grid>
            <Button
                id={`delete-${order.orderNumber}`}
                className={classes.error}
                onClick={(e)=>onDeleteClick(order.orderNumber)}
                variant="outlined">
                Изтрий
            </Button>
            
        </Container>
    );
}

export default OrderActions;