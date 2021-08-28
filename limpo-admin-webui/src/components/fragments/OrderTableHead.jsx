import React from 'react';
import { List, ListItem, ListItemText, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const useStyles = makeStyles(theme => ({
    head: {
        display: "flex",
        backgroundColor: theme.palette.primary.dark,
        color: "white",
    },
    icon: {
        width: "1px",
        color: "white"
    }
}));

const OrdersTableHead = (props) => {
    const classes = useStyles()
    let { nameFilter } = props
    
    return (
        <List className={classes.head}>
            <ListItem key="Номер на поръчка">
                <ListItemText>
                    Номер на поръчка
                </ListItemText>
            </ListItem>
            <ListItem key="Име на клиент">
                <ListItemText>Име на клиент</ListItemText>
                <Button className={classes.icon} onClick={(e) => props.setNameFilter(!nameFilter)}>
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
                <ListItemText>Детайли</ListItemText>
            </ListItem>
        </List>
    );
}

export default OrdersTableHead;