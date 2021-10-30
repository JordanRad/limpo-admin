import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton, Button, Grid, Typography } from '@material-ui/core';
import CustomerDetails from './details-tab/CustomerDetails';
import OrderDetails from './details-tab/OrderDetails';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OrderService from '../../services/OrderService';
const useStyles = makeStyles(theme => ({
    button: {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: "white",
        },
        textAlign: "center",
    },
    darkButton: {
        color: "white",
        backgroundColor: theme.palette.primary.dark
    },
    details: {
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
        borderLeft: "4px solid",
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(0, 2)
    },
    hide: {
        display: 'none'
    },
    orderDetails: {
        display: "flex",
        flexDirection: "column",
    },

    column: {
        width: "33%",
        margin: theme.spacing(1, 0),
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column"
    },
    orderItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderItemLine: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1, 2),
        color: theme.palette.primary.dark,
        alignItems: "center",
    },
    error: {
        backgroundColor: theme.palette.error.main,
        color: "white",
        width: "50px",
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
const OrderItems = (props) => {
    const classes = useStyles()
    let { orderItems } = props

    return orderItems.map((item, index) => {
        return (
            <Grid className={classes.orderItemLine} key={index}>
                <span className={classes.orderItem}>
                    <CheckCircleIcon /> &nbsp; {index + 1}. {item.name}
                </span>
                <span>{item.quantity} x {item.price.toFixed(2)} лв.</span>
            </Grid>
        )
    })
}

const TableRowDetails = (props) => {
    const classes = useStyles()

    let { order } = props

    const Total = order.orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const onPromoteClick = async (order) => {
        let confirmMessage = window.confirm("Сигурни ли сте, че искате да промените статуса поръчката?");

        if (confirmMessage) {

            let newStatus = promote(order.status)
            let url = `/orders/${order.orderNumber}?status=${newStatus}`

            let response = await OrderService.put(url)

            if (response !== undefined) {
                window.location.reload()
            }
        }
    }

    const onDeleteClick = async (orderNumber) => {
        let confirmMessage = window.confirm("Сигурни ли сте, че искате да изтриете тази поръчка?");
        if (confirmMessage) {
            await OrderService.delete("/orders/" + orderNumber)
            window.location.reload()
        }

    }

    return (
        <Grid container className={classes.details}>

            <Grid item xs={12} md={4} className={classes.column}>
                <Typography variant="h5">Информация за клиент:</Typography>
                <CustomerDetails customer={order.client} />
            </Grid>

            <Grid item xs={12} md={4} className={classes.column}>
                <Typography variant="h5">Изпълнение на поръчка:</Typography>
                <OrderDetails order={order} />

                <Typography style={{ marginTop: "auto" }} variant="body1">Отбележи поръчката като: &nbsp;
                    <Button
                        className={classes.save}
                        onClick={(e) => onPromoteClick(order)}
                        variant="outlined">
                        {getPromoteStatus(order.status)}
                    </Button>
                </Typography>
            </Grid>

            <Grid item xs={12} md={4} className={classes.column}>
                <Typography variant="h5">Поръчката включва:</Typography>
                <OrderItems orderItems={order.orderItems} />
                <Typography className={classes.line}><strong>Общо:</strong> &nbsp; {Total.toFixed(2)} лв.</Typography>
                <Typography style={{ marginTop: "auto" }} variant="body1">За да изтриете поръчката: &nbsp;
                    <Button
                        onClick={(e) => onDeleteClick(order.orderNumber)}
                        className={classes.error}>
                        <DeleteForeverIcon />
                    </Button>
                </Typography>
            </Grid>

        </Grid>
    );
}

export default TableRowDetails;