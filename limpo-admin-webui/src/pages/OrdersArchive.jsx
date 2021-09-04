import React, { useState } from 'react';
import { Button, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Searchbar from '../components/searchbar/Searchbar';
import Heading from '../components/heading/Heading';
import TableHead from '../components/table/TableHead'
import TableFooter from '../components/table/TableFooter'
import TableRow from '../components/table/TableRow'
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "80%",
        margin: "auto"
    },
    head: {
        alignItems: "center"
    },
    table: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        margin: "auto"
    }

}));

let orders = [
    {
        orderNumber: "11111111", client: "Йордан Радушев", date: "23.05.2021", status: "NEW", orderItems: [
            {
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
            },

        ]
    },
    { orderNumber: "22222222", client: "Бисер Бисеров", date: "12.04.2021", status: "PENDING", orderItems: [] },
    { orderNumber: "33333333", client: "Мони Манолов", date: "24.07.2021", status: "PENDING", orderItems: [] },
    { orderNumber: "44444444", client: "Иван Маринчев", date: "29.01.2021", status: "APPROVED", orderItems: [] },
    { orderNumber: "11111111", client: "Йордан Радушев", date: "23.05.2021", status: "NEW", orderItems: [] },
]
const OrdersArchive = () => {
    const classes = useStyles();
    const tableHeadCells = [
        { name: "Номер на поръчка", hasOrderByFilter: true },
        { name: "Име на клиент", hasOrderByFilter: true },
        { name: "Дата", hasOrderByFilter: true },
        { name: "Статус", hasOrderByFilter: false },
        { name: "Детайли", hasOrderByFilter: false }
    ]
    const [tableFooterCells,setTableFooterCells] = useState({ from: 1, to: 5, all: 11, page: 1 })
    
    return (
        <div className={classes.root}>
            <Grid className={classes.head} container direction="row" justifyContent="space-between">
                <Heading text="Архив поръчки" imageUrl="./businessman.png" />
                <Searchbar placeholder="Търси по номер на поръчка, име на клиент или дата" />
            </Grid>

            <br />
            <div className={classes.table}>
                <TableHead type="archive1" cells={tableHeadCells} />
                {orders.map(el => <TableRow type="archive1" order={el} />)}
                <TableFooter details={tableFooterCells} />
            </div>
        </div>
    );
}

export default OrdersArchive;