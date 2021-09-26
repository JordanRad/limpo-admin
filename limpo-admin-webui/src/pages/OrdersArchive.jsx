import React, { useEffect, useState } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from '../components/searchbar/Searchbar';
import Heading from '../components/heading/Heading';
import TableHead from '../components/table/TableHead'
import TableFooter from '../components/table/TableFooter'
import TableRow from '../components/table/TableRow'
import { useGlobalStateValue } from '../context/GlobalStateProvider';
import OrderService from '../services/OrderService';
import Placeholder from '../components/empty-placeholder/Placeholder';

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
    },
    progress: {
        marginBottom: theme.spacing(1),
        height: "2em"
    },
}));

const TYPE = "ARCHIVE"

const tableHeadCells = [
    { name: "Номер на поръчка", hasOrderByFilter: false },
    { name: "Име на клиент", hasOrderByFilter: false },
    { name: "Дата", hasOrderByFilter: false },
    { name: "Детайли", hasOrderByFilter: false }
]


const OrdersArchive = () => {
    const classes = useStyles();

    const [rows, setRows] = useState(undefined)

    const [globalState, dispatch] = useGlobalStateValue()

    const [pageNumber, setPageNumber] = useState(1)

    const [tableFooterCells, setTableFooterCells] = useState({ from: 0, to: 0, all: 0, page: pageNumber })

    const onPageNumberChanged = (number) => {
        setPageNumber(number)
    }

    const fetchData = async (url) => {
        const response = await OrderService.get(url)
        console.log(response)
        return response
    }


    useEffect(async () => {

        let orders = await fetchData("/orders/?startIndex=" + (pageNumber * 5 - 5).toString() + "&status=COMPLETED");
        setRows(orders)

        let all = await fetchData("/orders/count?status=COMPLETED");

        if (pageNumber > parseInt(tableFooterCells.all / 5)) {
            setTableFooterCells({ from: pageNumber * 5 - 4, to: all, all: all, page: pageNumber })
        } else {
            setTableFooterCells({ from: pageNumber * 5 - 4, to: pageNumber * 5, all: all, page: pageNumber })
        }
    }, [pageNumber])


    useEffect(() => {
        dispatch({ type: "update search input", payload: "" })

    }, [dispatch])


    useEffect(async () => {
        if (globalState.input.trim() !== "") {
            let orders = await fetchData(`/orders/search?searchInput=${globalState.input}&status=COMPLETED`);
            setRows(orders)
            setTableFooterCells({ from: pageNumber * 5 - 4, to: orders.length, all: orders.length, page: pageNumber })
        }

    }, [globalState.input])

    if (rows === undefined) {
        return (
            <div className={classes.root}>
                <Grid className={classes.head} container direction="row" justifyContent="space-between">
                    <Heading text="Архив поръчки" imageUrl="./businessman.png" />
                </Grid>

                <br />
                <div className={classes.table}>
                    <TableHead type="all" cells={tableHeadCells} />
                    <LinearProgress className={classes.progress} />
                    <TableFooter setPageNumber={onPageNumberChanged} details={tableFooterCells} />
                </div>
            </div>

        );
    } else {
        return (
            <div className={classes.root}>
                <Grid className={classes.head} container direction="row" justifyContent="space-between">
                    <Heading text="Архив поръчки" imageUrl="./businessman.png" />
                    <Searchbar placeholder="Търси по номер на поръчка, име на клиент или дата" />
                </Grid>

                <br />
                <div className={classes.table}>
                    <TableHead type={TYPE} cells={tableHeadCells} />
                    {
                        rows.length !== 0 ?
                            rows.map((el, index) => <TableRow key={index} type="archive" order={el} />) :
                            <Placeholder text="⚠️ Няма намрени поръчки"  />
                    }
                    <TableFooter setPageNumber={onPageNumberChanged} details={tableFooterCells} />
                </div>
            </div>
        );
    }
}

export default OrdersArchive;