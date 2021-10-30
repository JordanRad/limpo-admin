import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeFilledIcon from '@material-ui/icons/AccessTime';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { styled } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
    column: {
        color: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        flexWrap:"wrap"
    },
    line: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(1, 0),
        color: theme.palette.primary.dark,
    },
    
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
            <Grid className={classes.orderItemLine} key={index}>
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

    
    return (
        <Grid className={classes.column}>
            <Fields order={order} />
            
        </Grid>
    ); 
}
export default OrderDetails;