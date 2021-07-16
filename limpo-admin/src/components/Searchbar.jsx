import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    input:{
        width:"30em",
    }
}));
const Searchbar = (props) => {
    const [input, setInput] = useState("")

    const classes = useStyles();

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    console.log("INPUT: "+input)
    return (
        
            <TextField className={classes.input} placeholder="Търси по номер на поръчка, име на клиент или дата" id="searchbar" variant="outlined" onChange={onChangeHandler} />
       
    )
}

export default Searchbar;