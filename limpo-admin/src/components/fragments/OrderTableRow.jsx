import React from 'react';
import { List, ListItem, ListItemText, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.dark,
        borderBottom: "1px solid",
        borderColor: theme.palette.primary.dark,
        borderRadius: "inherit",
        height: "40px"
    },
    button: {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
        },
        textAlign: "center",
    },
}));

const OrdersTableRow = (props) => {
    const classes = useStyles()
    let { order, index } = props
    const onClickHandler = (e) => {
        console.log(e)
    }
    return (
        <List key={index} className={classes.row}>
            <ListItem key="1">
                <ListItemText><strong>{order.orderNumber}</strong></ListItemText>
            </ListItem>
            <ListItem className={classes.bold} key="Име на клиент">
                <ListItemText>{order.client}</ListItemText>
            </ListItem>
            <ListItem key="Дата">
                <ListItemText>{order.date}</ListItemText>
            </ListItem>
            <ListItem key="Статус">
                <ListItemText>{order.status}</ListItemText>
            </ListItem>
            <ListItem key="-">
                <ListItemText id={order.orderNumber} onClick={onClickHandler}>
                    <Button className={classes.button} variant="outlined">Детайли</Button>
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default OrdersTableRow;