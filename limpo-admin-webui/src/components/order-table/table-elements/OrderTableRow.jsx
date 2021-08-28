import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import OrderActions from './row-elements/OrderActions';
import ClientDetails from './row-elements/ClientDetails';
import OrderItemsList from './row-elements/OrderItemsList';

const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        height: "40px",
        borderLeft:"4px solid",
        borderColor:theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        marginBottom: theme.spacing(1)

    },
    button: {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: "white",
        },
        textAlign: "center",
    },
    details: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        marginBottom:theme.spacing(2),
        borderLeft:"4px solid black"
    },
    primary: {
        backgroundColor: theme.palette.primary.light
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light
    },
    hide: {
        display: 'none'
    },
    orderDetails: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
    },
    total: {
        alignSelf: "flex-start",
        padding: theme.spacing(0,3),
    }

}));

const getStatus = (status) => {
    switch (status) {
        case "NEW":
            return "Нова"
        case "PENDING":
            return "Чакаща"
        case "APPROVED":
            return "Одобрена"
        default:
            return "Нова"
    }
}
const OrdersTableRow = (props) => {
    const classes = useStyles()

    const [isShown, setIsShown] = useState(false)
    let { order, index } = props
    order.productItems = [{
        id: 2,
        product: {
            id: 3,
            name: "Чистене на прозорци Чистене на прозорци Чистене на прозорци Чистене на прозорци",
            type: "Чистене"
        },
        quantity: 2,
        price: 3.99
    },
    {
        id: 3,
        product: {
            id: 4,
            name: "Чистене на етаж",
            type: "Чистене на вход"
        },
        quantity: 6,
        price: 19.99
    }]

    useEffect(() => setIsShown(false), [props])

    const onClickHandler = (e) => setIsShown(!isShown)

    let total = order.productItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <div>
            {/* Order Row */}
            <List className={`${classes.row} ${classes.primary}`}>
                <ListItem key={`${index * 11.1}a1a`}>
                    <ListItemText><strong>{order.orderNumber}</strong></ListItemText>
                </ListItem>
                <ListItem className={classes.bold} key={`${index * 22.2}b1b`}>
                    <ListItemText>{order.client}</ListItemText>
                </ListItem>
                <ListItem key={`${index * 33.3}c1c`}>
                    <ListItemText>{order.date}</ListItemText>
                </ListItem>
                <ListItem key={`${index * 44.4}d1d`}>
                    <ListItemText>{getStatus(order.status)}</ListItemText>
                </ListItem>
                <ListItem key={`${index * 55.5}e1e`}>
                    <Button
                        id={order.orderNumber}
                        onClick={onClickHandler}
                        className={`${classes.button}`} variant="outlined">{isShown ? "Скрий" : "Виж"}</Button>
                </ListItem>
            </List>
            {/* END Order Row */}

            {/* Order Details */}
            <List className={`${classes.details} ${classes.primary} ${isShown ? "" : classes.hide}`}>
                <ListItem className={classes.orderDetails}>
                    <ClientDetails/>
                    <OrderItemsList items={order.productItems} />
                    <ListItemText className={classes.total}>
                        <strong>ОБЩО: {total} лв.</strong>
                    </ListItemText>
                </ListItem>
                <OrderActions order={order} />
            </List>
            {/* END Order Details */}
        </div>
    );

}

export default OrdersTableRow;