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
        margin: theme.spacing(1, 0)

    },
    mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1, 0, 0, 0),
        padding: 0
    },
    secondaryContainer: {
        display: "flex",
        justifyContent: "flex-start",
        padding: 0
    },
    img: {
        marginLeft: theme.spacing(2),
        alignSelf: "center"
    }
}));

// let client =
// {
//     firstName: "Йордан",
//     lastName: "Радушев",
//     phone: "+35988491569",
//     bulstat: "460y4hi4h649460y4hi4h649",
//     type: "Корпоративен",
//     email: "dani.radushev@gmail.com",
//     VATNumber: "0359y509309",
//     address: "София, ул. Козяк 47"
// }
const ClientDetails = (props) => {
    const classes = useStyles()
    let { client } = props
    let corporateClientDetails;
    if (client.type === "Корпоративен") {
        corporateClientDetails =
            [<Typography key="Bulstat" className={classes.line}><strong>Булстат:</strong> {client.bulstat}</Typography>,
            <Typography key="VAT" className={classes.line}><strong>VAT Номер:</strong> {client.VATNumber}</Typography>]
    }

    let clientName = client.type === "Некорпоративен" ? `${client.firstName} ${client.lastName}` : client.corporateName
    
    return (
        <Container className={classes.row}>
            <Typography><u>Информация за {client.type.toLowerCase()} клиент:</u></Typography>
            <Container className={classes.mainContainer}>
                <Typography><strong>Име:</strong> {clientName}</Typography>
                <Typography><strong>Имейл:</strong> {client.email}</Typography>
                <Typography><strong>Телефон:</strong> {client.phone}</Typography>
            </Container>
            <Container className={classes.secondaryContainer} style={{ padding: 0 }}>
                <div className={classes.marginLeft}>
                    <Typography className={classes.line}><strong>Адрес:</strong> {client.address}</Typography>
                    {corporateClientDetails}
                </div>
                <img alt="data"
                    className={classes.img}
                    height={corporateClientDetails ? "64em" : "32em"}
                    src="./personal-information.png" />
            </Container>
        </Container>
    );
}
export default ClientDetails;