import React, { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '../table/TableHead'
import TableFooter from '../table/TableFooter'
import TableRow from '../table/TableRow'
import OrderService from '../../services/OrderService';
import { useGlobalStateValue } from '../../context/GlobalStateProvider';
import Placeholder from '../empty-placeholder/Placeholder';
const useStyles = makeStyles(theme => ({
    progress: {
        marginBottom: theme.spacing(1),
        height: "2em"
    },
    table: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    }
}));
// let orders = [
//     {
//         orderNumber: "11111111", client: "Йордан Радушев", date: "23.05.2021", status: "NEW", orderItems: [
//             {
//                 id: 2,
//                 product: {
//                     id: 3,
//                     name: "Чистене на прозорци Чистене на прозорци Чистене на прозорци Чистене на прозорци",
//                     type: "Чистене"
//                 },
//                 quantity: 2,
//                 price: 3.99
//             },
//             {
//                 id: 3,
//                 product: {
//                     id: 4,
//                     name: "Чистене на етаж",
//                     type: "Чистене на вход"
//                 },
//                 quantity: 6,
//                 price: 19.99
//             },

//         ]
//     },
//     { orderNumber: "22222222", client: "Бисер Бисеров", date: "12.04.2021", status: "PENDING", orderItems: [] },
//     { orderNumber: "33333333", client: "Мони Манолов", date: "24.07.2021", status: "PENDING", orderItems: [] },
//     { orderNumber: "44444444", client: "Иван Маринчев", date: "29.01.2021", status: "APPROVED", orderItems: [] },
//     { orderNumber: "11111111", client: "Йордан Радушев", date: "23.05.2021", status: "NEW", orderItems: [] },
// ]

const tableHeadCells = [
    { id:"orderNumber", name: "Номер на поръчка", hasOrderByFilter: false },
    { id:"name", name: "Име на клиент", hasOrderByFilter: false },
    { id:"date", name: "Дата и час", hasOrderByFilter: false },
    { id:"status", name: "Статус", hasOrderByFilter: false },
    { id: "details",name: "Детайли", hasOrderByFilter: false }
]
const OrdersTable = (props) => {
    const classes = useStyles()

    const [rows, setRows] = useState(undefined)

    const [pageNumber, setPageNumber] = useState(1)

    const globalState = useGlobalStateValue()[0]

    const onPageNumberChanged = (number) => {
        setPageNumber(number)
    }
    const [tableFooterCells, setTableFooterCells] = useState({ from: 0, to: 0, all: 0, page: pageNumber })

    const fetchData = async (url) => {
        const response = await OrderService.get(url)
        console.log(response)
        return response
    }

    useEffect(async () => {
        let ordersPage = await fetchData(`/orders/?searchInput=${globalState.input.trim()}&status=${globalState.statusFilter}&pageNumber=${pageNumber - 1}&pageSize=5`)
        setRows(ordersPage.orders)

        let all = ordersPage.total;
        setTableFooterCells({ from: ordersPage.from, to: ordersPage.to, all: all, page: pageNumber })

    }, [pageNumber, globalState.statusFilter, globalState.input])



    if (rows === undefined) {
        return (
            <div className={classes.table}>
                <TableHead type="all" cells={tableHeadCells} />
                <LinearProgress className={classes.progress} />
                <TableFooter setPageNumber={onPageNumberChanged} details={tableFooterCells} />
            </div>
        );
    } else {


        return (
            <div className={classes.table}>
                <TableHead type="all" cells={tableHeadCells} />
                {
                    rows.length > 0 ?
                        rows.map((el, index) => <TableRow key={index} type="all" order={el} />) :
                        <Placeholder text="⚠️ Няма намрени поръчки" />
                }
                <TableFooter setPageNumber={onPageNumberChanged} details={tableFooterCells} />
            </div>
        );
    }

}

export default OrdersTable;