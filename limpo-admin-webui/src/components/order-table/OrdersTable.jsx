import React, { useState, useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '../table/TableHead'
import TableFooter from '../table/TableFooter'
import TableRow from '../table/TableRow'
import OrderService from '../../services/OrderService';
import { useGlobalStateValue } from '../../context/GlobalStateProvider';
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
    { name: "Номер на поръчка", hasOrderByFilter: false },
    { name: "Име на клиент", hasOrderByFilter: true },
    { name: "Дата", hasOrderByFilter: false },
    { name: "Статус", hasOrderByFilter: false },
    { name: "Детайли", hasOrderByFilter: false }
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

    useEffect(async () => {
        let ordersUrl = "/orders/?startIndex="+(pageNumber*5 - 5).toString()+"&status="+globalState.statusFilter
        console.log(ordersUrl)
        let orders =[]
        await OrderService.get(ordersUrl)
            .then((res) =>{
                orders = res
            })
            .catch((e) => console.log(e))

            setRows(orders)
        let all = 0;
        let countUrl = "/orders/count?status="+globalState.statusFilter

        await OrderService.get(countUrl).then((res)=>all=res).catch((e)=>console.log(e))
        
        if (pageNumber > parseInt(tableFooterCells.all / 5)) {
            setTableFooterCells({ from: pageNumber * 5 - 4, to: all, all: all, page: pageNumber })
        } else {
            setTableFooterCells({ from: pageNumber * 5 - 4, to: pageNumber * 5, all: all, page: pageNumber })
        }
        
    }, [pageNumber,globalState])


    
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
                {rows.length > 0 ? rows.map((el, index) => <TableRow key={index} type="all" order={el} />) : <Grid>Няма намерени почъчки</Grid>}
                <TableFooter setPageNumber={onPageNumberChanged} details={tableFooterCells} />
            </div>
        );
    }

}

export default OrdersTable;