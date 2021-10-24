import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import CustomerDetails from './details-tab/CustomerDetails';
import OrderDetails from './details-tab/OrderDetails';

const useStyles = makeStyles(theme => ({
    row: {
        borderLeft: "4px solid",
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        marginBottom: theme.spacing(1),
        height: "64px",
        padding: theme.spacing(0, 2)
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
        padding: theme.spacing(0,2)
    },
    hide: {
        display: 'none'
    },
    orderDetails: {
        display: "flex",
        flexDirection: "column",
    },
    total: {
        alignSelf: "flex-start",
        padding: theme.spacing(0, 3),
    },
    column:{
        width:"33%",
        margin:theme.spacing(1,0),
        // border: "1px solid red",
        display:"flex",
        flexDirection:"column"
    }


}));

const TableRowDetails = (props) => {
    const classes = useStyles()

    let {order} = props

    console.log(order)
    return (  
        <Grid container className={classes.details}>

            <Grid container className={classes.column}>
                <Typography variant="h5">Информация за клиент:</Typography>
                <CustomerDetails customer={order.client}/>
            </Grid>
            
            <Grid container className={classes.column}>
                <Typography variant="h5">Информация за поръчка:</Typography>
                <OrderDetails order={order}/>
            </Grid>

            <Grid container className={classes.column}>
                <Typography variant="h5">Информация за поръчка:</Typography>
                
            </Grid>
        </Grid>
    );
}
 
export default TableRowDetails;