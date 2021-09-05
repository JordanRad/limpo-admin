import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from '../components/searchbar/Searchbar';
import OrdersTable from '../components/order-table/OrdersTable';
import StatusButtonsContainer from '../components/status-buttons/StatusButtonsContainer'
import {useGlobalStateValue } from '../context/GlobalStateProvider';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        zIndex: "100",
        position: "relative"
    },
    filters: {
        display: "flex",
        flex:1,
        justifyContent: "space-between",
        alignItems: "center",
  
    },
    statusButtons:{
        display: "flex",
        alignItems:"flex-end",
        height: "4em",
        marginLeft: "auto",
        justifyContent: "center",

    },

}));
const Dashboard = (props) => {
    const classes = useStyles();
    const [state,dispatch] = useGlobalStateValue()

    useEffect(() => {
        dispatch({ type: "update search input", payload: "" })
    }, [dispatch])

    console.log(state)
    return (
        <div className={classes.root}>
            <div className={classes.filters}>
                <Searchbar placeholder="Търси по номер на поръчка, име на клиент или дата" />
                <div className={classes.statusButtons}>
                <StatusButtonsContainer active={state.statusFilter}/>
                <img alt="businessman" height="50px" src="./businessman.png"/>
                </div>
            </div>
            <br></br>
            <OrdersTable />
        </div>
    );
}

export default Dashboard;