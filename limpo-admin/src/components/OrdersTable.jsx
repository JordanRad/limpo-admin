import React, { useState } from 'react';
import { List, ListItem, ListItemText, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import OrdersTableRow from './fragments/OrderTableRow';
import OrdersTableHead from './fragments/OrderTableHead';
import OrdersTableFooter from './fragments/OrderTableFooter';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        border: "0px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "4px",
        padding: "0px",
        margin: "0px"
    },
    progress:{
        marginTop:theme.spacing(1),
        height:"2.5em"
    }
}));

const orderFilter = (filterType, orders) => {
    return orders.sort(function (a, b) {
        return filterType === "ASC" ?
            (b.client).localeCompare(a.client) :
            (a.client).localeCompare(b.client);
    })
}

let orders = [{ orderNumber: "11111111", client: "Йордан Радушев", date: "23.05.2021", status: "NEW" },
{ orderNumber: "22222222", client: "Бисер Бисеров", date: "12.04.2021", status: "PENDING" },
{ orderNumber: "33333333", client: "Мони Манолов", date: "24.07.2021", status: "PENDING" },
{ orderNumber: "44444444", client: "Иван Маринчев", date: "29.01.2021", status: "APPROVED" }]
//let orders = []

const OrdersTable = (props) => {
    const classes = useStyles()
    const [rows,setRows] = useState(null);
    const [nameFilter, setNameFilter] = useState(false)

    orders = orderFilter(nameFilter ? "ASC" : "DESC", orders)
    console.log("FILTER: " + nameFilter)

    let TableRows = orders.map((order, index) => <OrdersTableRow key={index * 3.14} closeDetails={nameFilter} index={index + 1} order={order} />)

    if (orders.length === 0) {
        TableRows.push(
            <List key='err' className={classes.row}>
                <ListItem>
                    <ListItemText><strong>Няма вписани поръчки по зададен критерии</strong></ListItemText>
                </ListItem>
            </List>)
    }

    return (
        <List className={classes.root}>
            <OrdersTableHead
                nameFilter={nameFilter}
                setNameFilter={setNameFilter} />

            {rows!=null?<LinearProgress className={classes.progress}/>:TableRows}
           <OrdersTableFooter/>
        </List>

    );
}

export default OrdersTable;