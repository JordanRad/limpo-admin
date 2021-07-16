import React from 'react';
import { Drawer, List, ListItem, ListItemText, Badge, Button, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        textAlign:"center",
    },
    head: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.palette.primary.dark,
        color: "white"
    },
    row: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.dark,
        borderBottom:"1px solid",
        borderColor: theme.palette.primary.dark
    }
}));

const OrdersTable = (props) => {
    const classes = useStyles()
    return (
        <List className={classes.root}>
            {/*Table Head */}
            <List className={classes.head}>
                <ListItem key="Номер на поръчка">
                    <ListItemText>Номер на поръчка</ListItemText>
                </ListItem>
                <ListItem key="Име на клиент">
                    <ListItemText>Име на клиент</ListItemText>
                </ListItem>
                <ListItem key="Дата">
                    <ListItemText>Дата</ListItemText>
                </ListItem>
                <ListItem key="Статус">
                    <ListItemText>Статус</ListItemText>
                </ListItem>
                <ListItem key="-">
                    <ListItemText>-</ListItemText>
                </ListItem>
            </List>
            {/*End Table Head */}

            <List className={classes.row}>
                <ListItem key="1">
                    <ListItemText>113453</ListItemText>
                </ListItem>
                <ListItem key="Име на клиент">
                    <ListItemText>Йордан Радушев</ListItemText>
                </ListItem>
                <ListItem key="Дата">
                    <ListItemText>23.05.2021</ListItemText>
                </ListItem>
                <ListItem key="Статус">
                    <ListItemText>ПРИЕТА</ListItemText>
                </ListItem>
                <ListItem key="-">
                    <ListItemText>
                        <Button variant="outlined" >Детайли</Button>
                    </ListItemText>
                </ListItem>
            </List>

            <List className={classes.row}>
                <ListItem key="1">
                    <ListItemText>113453</ListItemText>
                </ListItem>
                <ListItem key="Име на клиент">
                    <ListItemText>Йордан Радушев</ListItemText>
                </ListItem>
                <ListItem key="Дата">
                    <ListItemText>23.05.2021</ListItemText>
                </ListItem>
                <ListItem key="Статус">
                    <ListItemText>ПРИЕТА</ListItemText>
                </ListItem>
                <ListItem key="-">
                    <ListItemText>
                        <Button variant="outlined" >Детайли</Button>
                    </ListItemText>
                </ListItem>
            </List>
        </List>

    );
}

export default OrdersTable;