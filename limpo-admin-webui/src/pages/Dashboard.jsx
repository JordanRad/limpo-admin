import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from '../components/searchbar/Searchbar';
import OrdersTable from '../components/order-table/OrdersTable';
import StatusButtonsContainer from '../components/status-buttons/StatusButtonsContainer'
import { TableHead } from '@material-ui/core';
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
    
    const [activeStatusButton,setActiveStatusButton] = useState("all")
    
    const onStatusFilterChange = (id) => {
        setActiveStatusButton(id)
    }

    console.log(activeStatusButton)

    
    return (
        <div className={classes.root}>
            <div className={classes.filters}>
                <Searchbar placeholder="Търси по номер на поръчка, име на клиент или дата" />
                <div className={classes.statusButtons}>
                <StatusButtonsContainer
                    active={activeStatusButton}
                    onClick={onStatusFilterChange} />
                <img alt="businessman" height="50px" src="./businessman.png"/>
                </div>
            </div>
            <br></br>
            <OrdersTable />
            
            <br/>
            
        </div>
    );
}

export default Dashboard;