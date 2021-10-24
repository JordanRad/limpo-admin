import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeFilledIcon from '@material-ui/icons/AccessTime';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles(theme => ({
    column: {
        color: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
    },
    line: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(1, 0),
        color: theme.palette.primary.dark,
    },
    orderItem: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1, 0),
        color: theme.palette.primary.dark,
        alignItems: "center",
    }
}));

const Fields = (props) => {
    const classes = useStyles()
    let { order } = props

    const fieldsMap = [
        { id: "Дата", value: order.scheduledAtString, icon: <AccessTimeFilledIcon /> },
        { id: "Оператор", value: "Иван Хинов", icon: <PersonIcon /> }

    ]

    const fields = fieldsMap.map((item, index) => item.value !== null ? <Typography className={classes.line} key={index} variant="body1">{item.icon} &nbsp; <strong>{item.id}</strong>: &nbsp; {item.value}</Typography> : "")

    return fields
}

const OrderItems = (props) => {
    const classes = useStyles()
    let { orderItems } = props

    return orderItems.map((item, index) => {
        return (
            <Grid className={classes.orderItem} key={index}>
                <span className={classes.orderItem}>
                    <CheckCircleIcon /> &nbsp; {index + 1}. {item.name}
                </span>
                <span>{item.quantity} x {item.price.toFixed(2)} лв.</span>
            </Grid>
        )
    })
}
const OrderDetails = (props) => {
    const classes = useStyles()
    let { order } = props

    const Total = order.orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <Grid className={classes.column}>
            <Fields order={order} />
            <Typography className={classes.line}><DescriptionIcon /> &nbsp; <strong>Поръчката включва:</strong></Typography>
            <OrderItems orderItems={order.orderItems} />
            <Typography className={classes.line}><DescriptionIcon /> &nbsp; <strong>Общо:</strong> &nbsp; {Total.toFixed(2)} лв.</Typography>
        </Grid>
    );
}
export default OrderDetails;