import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton, Grid, Container } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(1, 0),
        height:"10em",
        paddingTop:theme.spacing(1),
        borderLeft:"4px solid",
        "&:hover":{
            boxShadow:"3px 8px 30px"+theme.palette.secondary.light
        }
    },

    error: {
        color: theme.palette.primary.dark,
        "&:hover":{
            backgroundColor:theme.palette.error.main,
            color:"white",
            boxShadow:"2px 4px 10px"+theme.palette.primary.dark
        }
    },
    scroll:{
        overflowY:"auto",
        height:"50%",
        marginTop:theme.spacing(1),
    },
    cardHeader:{
        marginTop:theme.spacing(1),

    }
}));

export default function LimpoUnit(props) {
    const classes = useStyles();
    const { id, name, description } = props

    return (
        <Grid item sm={6} >
            <Container className={classes.root} >
                <Grid className={classes.cardHeader} container alignItems="center">
                    <Grid item xs={11}>
                        <Typography variant="h6">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton className={classes.error}><DeleteForeverIcon /></IconButton>
                    </Grid>
                </Grid>
                <div className={classes.scroll}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                </div>
            </Container>
        </Grid>





    );
}