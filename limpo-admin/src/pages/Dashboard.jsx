import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from '../components/Searchbar';
import OrdersTable from '../components/OrdersTable';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        marginTop: "100px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width:"75%",
       margin:"auto"
    },

}));
const Dashboard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Searchbar />
            <br></br>
            <OrdersTable />
        </div>
    );
}

export default Dashboard;