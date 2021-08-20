import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles(theme => ({
    row: {
        paddingLeft: "0",
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        marginBottom: "8px"
    },
    icon: {
        color: theme.palette.primary.dark
    },
    desc: {
        width: "50%"
    },
    price: {
        width: "20%",
        display: "flex",
        justifyContent: "flex-end"
    }
}));

const LimpoUnit = (props) => {
    const classes = useStyles()
    const { item, index } = props
    
    return (
        <Container className={classes.row}>
            <Typography className={classes.desc}>
                Услуга <strong>#{index}</strong>: {item.product.type} - {item.product.name}
                <InfoIcon className={classes.icon} />
            </Typography>
            <Typography className={classes.price}>
                {item.quantity} x {item.price} = {`${item.quantity * item.price} лв.`}
            </Typography>
            <div style={{ width: "30%" }}>&nbsp;</div>
            <br></br>
        </Container>
    );
}

export default LimpoUnit;