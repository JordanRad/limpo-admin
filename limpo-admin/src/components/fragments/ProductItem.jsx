import React from 'react';
import { List, ListItem, ListItemText, Button, } from '@material-ui/core';
const ProductItem = (props) => {
    const { item,index } = props
    return (
    <ListItem key={index*9.991+"-details"}>
        <ListItemText>Тип: {item.product.type}</ListItemText>
        <ListItemText>{item.product.name}</ListItemText>
        <ListItemText>{item.quantity} x {item.price} = {`${item.quantity*item.price} лв.`} </ListItemText>
    </ListItem>
    );
}

export default ProductItem;