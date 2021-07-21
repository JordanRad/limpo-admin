import React, { useState, useEffect } from 'react';
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
    accordion: {
        width: "100%"
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light
    },
    hide: {
        display: 'none'
    }
}));

const OrdersTableRow = (props) => {
    const classes = useStyles()

    const [isShown, setIsShown] = useState(false)
    let { order, index, closeDetails } = props

    useEffect(() => {
        setIsShown(false)
    }, [props])
    const onClickHandler = (e) => {
        setIsShown(!isShown)
        console.log(e.target)
    }

    return (
        <div>
            <List key={index * 100} className={`${classes.row} ${index % 2 === 0 ? classes.secondary : ""}`}>
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
                    <ListItemText>{order.status}</ListItemText>
                </ListItem>
                <ListItem key={`${index * 55.5}e1e`}>
                    <Button
                        id={order.orderNumber}
                        onClick={onClickHandler}
                        className={`${classes.button}`} variant="outlined">{isShown ? "Скрий" : "Виж"}</Button>
                </ListItem>
            </List>
            <List key={index * 2.1 + "details"} className={`${classes.row} ${index % 2 === 0 ? classes.secondary : ""} ${isShown ? "" : classes.hide}`}>
                <ListItem key={index * 65.1 + "details"}>
                    <ListItemText>Детайли</ListItemText>
                </ListItem>
            </List>
        </div>
    );

}

export default OrdersTableRow;