import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText ,List} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        flexDirection:"column",
        width:"100%"
    },
    clientDetails:{
        paddingLeft: "0",
    }
}));

let client =
{
    firstName: "Йордан",
    lastName: "Радушев",
    phone: "+35988491569",
    bulstat: "",
    type: "Некорпоративен",
    email: "dani.radushev@gmail.com",
    VATNumber: "",
    address: "София, ул. Козяк 47"
}
const ClientInfo = (props) => {
    const classes = useStyles()
    return (
        <List className={classes.row}>
            <div><u>Информация за клиент:</u></div>
            <ListItem className={classes.clientDetails} key={Math.random() * 35.15 + "client-details"}>
                Тип: 
            </ListItem>
           
        </List>
    );
}

export default ClientInfo;