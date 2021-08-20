import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Service from './fragments/Service';

const ServiceList = (props) => {
    let { services } = props
    let List = services.map((item, index) => <Service key={"service-" + index} name={item.name} description={item.description} />
    )
    return (
        <Grid
            container direction="row"
            justify="space-between">
            {List}
        </Grid>

    );
}

export default ServiceList;