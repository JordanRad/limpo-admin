import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles(theme => ({
    head: {
        display: "flex",
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "inherit",
        color: "white",
        height: "1.6em"
    },
    icon: {
        width: "1px",
        color: "white"
    }
}));

const OrdersTableFooter = (props) => {
    const classes = useStyles()

    const [pageNumber, setPageNumber] = useState(1);
    const [areDisabled, setAreDisabled] = useState([false,false])

    const onPreviousClickHandler = (e)=>{
        setAreDisabled([false,false])
        setPageNumber(pageNumber-1);
        if(pageNumber <= 1){
            setAreDisabled([true,false])
        }
    }

    const onNextClickHandler = (e)=>{
        setAreDisabled([false,false])
        setPageNumber(pageNumber+1);
        if(pageNumber >= parseInt(10/3)){
            setAreDisabled([false,true])
        }
    }
    return (
        <List className={classes.head}>
            <ListItem key="Брой">
                <ListItemText>1 - 4 от общо 243</ListItemText>
            </ListItem>
            <ListItem style={{textAlign:"right"}} key="Номер на страница">

                <ListItemText>
                    <Button disabled={areDisabled[0]} className={classes.icon} onClick={onPreviousClickHandler}>
                        <NavigateBeforeIcon />
                    </Button>
                    {pageNumber}
                    <Button disabled={areDisabled[1]} className={classes.icon} onClick={onNextClickHandler}>
                        <NavigateNextIcon />
                    </Button>
                </ListItemText>

            </ListItem>
        </List>
    );
}

export default OrdersTableFooter;