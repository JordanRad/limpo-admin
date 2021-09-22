import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles(theme => ({
    row: {
        paddingLeft: "0",
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        margin: theme.spacing(1,0)
    },
    icon: {
        color: theme.palette.primary.dark,
        marginRight: theme.spacing(1)
    },
    desc: {
        width: "40%",
        display:"flex",
    },
    price: {
        width: "20%",
        display: "flex",
        justifyContent: "flex-start"
    }
}));

const OrderItem = (props) => {
    const classes = useStyles()
    const { item } = props
    
    return (
        <Container className={classes.row}>
            <Typography className={classes.desc}>
            <CheckCircleIcon className={classes.icon} />{item.name}
                
            </Typography>
            <Typography className={classes.price}>
                {item.quantity} x {item.price} = {`${item.quantity * item.price} лв.`}
            </Typography>
        </Container>
    );
}

export default OrderItem;