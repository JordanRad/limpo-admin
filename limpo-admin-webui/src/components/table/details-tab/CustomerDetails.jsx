import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import DescriptionIcon from '@material-ui/icons/Description';
import BusinessIcon from '@material-ui/icons/Business';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const useStyles = makeStyles(theme => ({
    column: {
        color: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        flexWrap:"wrap"

    },
    line: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(1, 0)
    },
    segment:{
        display: "flex",
        alignItems: "center",
        paddingRight:theme.spacing(2)
    }
}));

const Fields = (props) => {
    const classes = useStyles()
    let { customer } = props

    const fieldsMap = [
        { id: "Име", value: customer.type === "Некорпоративен" ? `${customer.firstName} ${customer.lastName}` : customer.corporateName, icon: <PersonIcon /> },
        { id: "Имейл", value: customer.email, icon: <AlternateEmailIcon /> },
        { id: "Телефон", value: customer.phone, icon: <PhoneIcon /> },
        { id: "Тип", value: customer.type, icon: customer.type === "Корпоративен" ? <BusinessIcon /> : <AccountBoxIcon /> },
        { id: "Адрес", value: customer.address, icon: <HomeIcon /> },
        { id: "Булстат", value: customer.bulstat, icon: <DescriptionIcon /> },
        { id: "VAT номер", value: customer.bulstat, icon: <DescriptionIcon /> }
    ]

    const fields = fieldsMap.map((item, index) => {
        if (item.value !== null) {
            return (
                <div className={classes.segment} key={index} >
                    <Typography className={classes.line} variant="body1">{item.icon} &nbsp; <strong>{item.id}</strong>:&nbsp; &nbsp;</Typography>
                    <Typography className={classes.line} variant="body1">{item.value}</Typography>
                </div>
            )
        } else {
            return "";
        }
    })

    return fields
}
const CustomerDetails = (props) => {
    const classes = useStyles()
    let { customer } = props
    let corporateClientDetails;

    return (
        <Grid className={classes.column}>
            <Fields customer={customer} />
        </Grid>
    );
}
export default CustomerDetails;