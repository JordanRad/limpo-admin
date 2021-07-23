import React from 'react';
import { Button, Divider, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 0,
        paddingTop: 0,
        marginBottom: -10,
        marginTop: 0
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
    }
}
const OrderActions = (props) => {
    const classes = useStyles()
    let { order } = props
    return (
        <ListItem className={classes.row} key={"--/" + Math.random()}>
            <Button className={classes.error} variant="outlined">Изтрий </Button>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <p>Запиши поръчката като: &nbsp; <Button className={classes.save} variant="outlined">{getPromoteStatus(order.status)}</Button></p>
        </ListItem>
    );
}

export default OrderActions;