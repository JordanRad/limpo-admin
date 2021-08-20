import { Container, Typography } from '@material-ui/core';
import React from 'react';
import LimpoUnit from './fragments/LimpoUnit';

const LimpoUnitList = (props) => {
    let { items } = props

    let ItemList = items.map((item, index) => <LimpoUnit item={item} key={index} index={index+1} />)

    return (
        <Container style={{ width: "100%" }}>
            <Typography><u>Включени услуги:</u></Typography>
            {ItemList}
        </Container>
    )
}

export default LimpoUnitList;