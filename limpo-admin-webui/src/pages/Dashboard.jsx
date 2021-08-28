import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from '../components/Searchbar';
import OrdersTable from '../components/OrdersTable';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "75%",
        margin: "auto",
        zIndex: "100",
        position: "relative"
    },

}));
const Dashboard = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Searchbar placeholder="Търси по номер на поръчка, име на клиент или дата" />
            <br></br>
            <OrdersTable />
        </div>
    );
}

export default Dashboard;