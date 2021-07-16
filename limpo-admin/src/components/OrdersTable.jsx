import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Badge, Button, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import OrdersTableRow from './fragments/OrderTableRow';
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        border: "0px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "4px",
        padding: "0px",
        margin: "0px"
    },
    head: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "inherit",
        color: "white"
    },
    headField: {
        display: "flex",
        flex: 1,
        flexDirection: "row"
    },
    icon: {
        width: "1px",
        color: "white"
    }

}));

const orderFilter = (filterType, orders) => {
    return orders.sort(function (a, b) {
        return filterType === "ASC" ?
            (b.client).localeCompare(a.client) :
            (a.client).localeCompare(b.client);
    })
}
let orders = [{ orderNumber: "111", client: "Йордан Радушев", date: "23.05.2021", status: "ПРИЕТА" },
{ orderNumber: "222", client: "Бисер Бисквитката", date: "12.04.2021", status: "ПРИЕТА" },
{ orderNumber: "333", client: "Мони Манолов", date: "24.07.2021", status: "НОВА" },
{ orderNumber: "444", client: "Иван Маринчев", date: "29.01.2021", status: "ПРИЕТА" }]

const OrdersTable = (props) => {
    const classes = useStyles()
    const [nameFilter, setNameFilter] = useState(false)

    orders = orderFilter(nameFilter ? "ASC" : "DESC", orders)

    let tableRows = orders.map(order => <OrdersTableRow order={order} />)

    return (
        <List className={classes.root}>
            {/*Table Head */}
            <List className={classes.head}>
                <ListItem key="Номер на поръчка">
                    <ListItemText>Номер на поръчка</ListItemText>
                </ListItem>
                <ListItem key="Име на клиент">
                    <ListItemText>Име на клиент</ListItemText>
                    <Button onClick={(e) => setNameFilter(!nameFilter)} className={classes.icon}>
                        {nameFilter ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </Button>
                </ListItem>
                <ListItem key="Дата">
                    <ListItemText>Дата</ListItemText>
                </ListItem>
                <ListItem key="Статус">
                    <ListItemText>Статус</ListItemText>
                </ListItem>
                <ListItem key="-">
                    <ListItemText>-</ListItemText>
                </ListItem>
            </List>
            {/*End Table Head */}
            {tableRows}
        </List>

    );
}

export default OrdersTable;