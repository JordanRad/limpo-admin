import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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
const OrderActions = (props) => {
    const classes = useStyles()
    let { order } = props
    return (
        <Container className={classes.row}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Typography>Запиши поръчката като: &nbsp;</Typography>
                <Button
                    className={classes.save}
                    variant="outlined">
                    {getPromoteStatus(order.status)}
                </Button>
            </Grid>
            <Button
                id={`delete-${order.orderNumber}`}
                className={classes.error}
                variant="outlined">
                Изтрий
            </Button>
            
        </Container>
    );
}

export default OrderActions;