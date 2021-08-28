import { Grid } from '@material-ui/core';
import React from 'react';
import LimpoUnit from './LimpoUnit';

const LimpoUnitsList = (props) => {
    let { services } = props
    let List = services.map((item, index) => <LimpoUnit key={"service-" + index} name={item.name} description={item.description} />
    )
    return (
        <Grid
            container direction="row"
            justifyContent="space-between">
            {List}
        </Grid>

    );
}

export default LimpoUnitsList;