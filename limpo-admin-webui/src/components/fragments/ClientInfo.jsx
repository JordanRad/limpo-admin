import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    row: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    line: {
        margin: theme.spacing(1,0)
    
    },
    mainContainer:{
        display:"flex",
        justifyContent:"space-between",
        margin: theme.spacing(1,0),
        padding:0
    },
}));

let client =
{
    firstName: "Йордан",
    lastName: "Радушев",
    phone: "+35988491569",
    bulstat: "460y4hi4h649",
    type: "Корпоративен",
    email: "dani.radushev@gmail.com",
    VATNumber: "0359y509309",
    address: "София, ул. Козяк 47"
}
const ClientInfo = (props) => {
    const classes = useStyles()
    let corporateClientDetails;
    if (client.type === "Корпоративен") {
        corporateClientDetails =
            [<Typography key="Bulstat" className={classes.line}><strong>Булстат:</strong> {client.bulstat}</Typography>,
            <Typography key="VAT" className={classes.line}><strong>VAT Номер:</strong> {client.VATNumber}</Typography>]
    }
    return (
        <Container className={classes.row}>
            <Typography><u>Информация за {client.type.toLowerCase()} клиент:</u></Typography>
            <Container className={classes.mainContainer}>
                <Typography><strong>Име:</strong> {client.firstName+" "+client.lastName}</Typography> 
                <Typography><strong>Имейл:</strong> {client.email}</Typography>
                <Typography><strong>Телефон:</strong> {client.phone}</Typography>
            </Container>
            <Typography className={classes.line}><strong>Адрес:</strong> {client.address}</Typography>
            {corporateClientDetails}
        </Container>
    );
}

export default ClientInfo;