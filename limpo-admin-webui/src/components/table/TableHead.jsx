import React, { useState } from 'react';
import { Grid, IconButton, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PersonIcon from '@material-ui/icons/Person'
const useStyles = makeStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        marginBottom: theme.spacing(1),
        height: "64px",
        padding: theme.spacing(0, 2)

    },
    icon: {
        color: theme.palette.primary.dark,
        margin: theme.spacing(0,1),
    },
    item: {
        display: "flex",
        alignItems: "center"
    }
}));

const TableHeadCell = (props) => {
    const classes = useStyles();
    let { item, cellSize } = props;
    const [filter, setFilter] = useState("ASC")
    const onFilterChangeHandler = (e) => {
        filter === "ASC" ? setFilter("DESC") : setFilter("ASC")
    }

    return (
        <Grid item className={classes.item} xs={parseInt(cellSize)}>
            {item.name}
            {item.hasOrderByFilter ?
                filter === "ASC" ?
                    <IconButton className={classes.icon} onClick={onFilterChangeHandler}><ArrowUpwardIcon /></IconButton>
                    : <IconButton className={classes.icon} onClick={onFilterChangeHandler}> <ArrowDownwardIcon /> </IconButton>
                : ""}
            
            {/* <PersonIcon className={classes.icon}/> */}
        </Grid>
    )
}
const TableHead = (props) => {
    const classes = useStyles();
    let { cells, type } = props

    let cellSizes = type === "ARCHIVE" ? [4, 4, 3, 1, 1] : [3, 3, 3, 2, 1]

    let CellsList = cells.map((el, index) => {
        return <TableHeadCell key={index + "-head"} cellSize={[cellSizes[index]]} item={el} />
    })
    return (
        <Grid container alignItems="center" className={classes.head}>
            {CellsList}
        </Grid>
    );
}

export default TableHead;