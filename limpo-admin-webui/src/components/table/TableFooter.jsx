import React, { useState } from 'react';
import { Grid, IconButton, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        marginBottom: theme.spacing(1),
        height: "44px",
        padding: theme.spacing(0, 2)

    },
    icon: {
        color: theme.palette.primary.dark,
    },
}));

const TableFooter = (props) => {
    let { details, setPageNumber } = props

    const classes = useStyles();

    const [areArrowsDisabled,setAreArrowsDisabled] = useState([true,false])
    
    const onPreviousClickHandler =  async (e)=>{
        setAreArrowsDisabled([false,false])
        setPageNumber(details.page-1);
        if(details.page-1 <= 1){
            setAreArrowsDisabled([true,false])
        }
    }

    const onNextClickHandler = (e)=>{
        setAreArrowsDisabled([false,false])
        setPageNumber(details.page+1);
        if(details.page >= parseInt(details.all/5)){
            details.to = details.all
            setAreArrowsDisabled([false,true])
        }
        
    }
    
    
    return (
        <Grid container alignItems="center" justifyContent="space-between" className={classes.head}>
            <Grid item>
                {details.from} - {details.to} oт {details.all}
            </Grid>

            <Grid item>
                <IconButton disabled={areArrowsDisabled[0]} className={classes.icon} onClick={onPreviousClickHandler}>
                    <NavigateBeforeIcon />
                </IconButton>
                {details.page}
                <IconButton disabled={areArrowsDisabled[1]} className={classes.icon} onClick={onNextClickHandler}>
                    <NavigateNextIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default TableFooter;