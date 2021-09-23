import { Grid } from '@material-ui/core';
import React from 'react';
import LimpoUnit from './LimpoUnit';

const LimpoUnitsList = (props) => {
    let { limpoUnits } = props
    let List = limpoUnits.map((item, index) => <LimpoUnit key={"limpoUnit-" + index} id={item.id} name={item.name} description={item.description} />
    )
    return (
        <Grid container spacing={5}>
            {List}
        </Grid>

    );
}

export default LimpoUnitsList;