import { Container, Typography } from '@material-ui/core';
import React from 'react';
import OrderItem from './OrderItem';

const OrderItemsList = (props) => {
    let { items } = props

    let ItemList = items.map((item, index) => <OrderItem item={item} key={index} index={index+1} />)

    return (
        <Container style={{ width: "100%",overflowY:"auto",
        height:"150px" }}>
            <Typography><u>Включени услуги:</u></Typography>
            {ItemList}
        </Container>
    )
}

export default OrderItemsList;