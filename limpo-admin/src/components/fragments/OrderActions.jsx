import React from 'react';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        marginLeft: "12px"
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
const OrderActions = (props) => {
    const classes = useStyles()
    let { order } = props
    return (
        <Container className={classes.row}>
            <p><Button className={classes.error} variant="outlined">Изтрий</Button></p>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <p>Запиши поръчката като: &nbsp; <Button className={classes.save} variant="outlined">{getPromoteStatus(order.status)}</Button></p>
        </Container>
    );
}

export default OrderActions;