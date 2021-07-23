import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles(theme => ({
    row: {
        paddingLeft: "0",
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
    },
    icon: {
        color: theme.palette.primary.dark
    },
    desc: {
        width: "35%"
    },
    price: {
        width: "15%"
    }
}));

const ProductItem = (props) => {
    const classes = useStyles()
    const { item, index } = props
    return (
        <ListItem className={classes.row} key={index * 9.991 + "-details"}>
            <ListItemText className={classes.desc}>
                Услуга <strong>#{index + 1}</strong>: {item.product.type} - {item.product.name}
                <InfoIcon className={classes.icon} />
            </ListItemText>
            <ListItemText className={classes.price}>
                {item.quantity} x {item.price} = {`${item.quantity * item.price} лв.`}
            </ListItemText>
            <div style={{ width: "30%" }}>&nbsp;</div>
        </ListItem>
    );
}

export default ProductItem;