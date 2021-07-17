import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
const useStyles = makeStyles(theme => ({
    input: {
        width: "30em",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            color:"green"
        },
    },
}));
const Searchbar = (props) => {
    const [input, setInput] = useState("")

    const classes = useStyles();

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    console.log("INPUT: " + input)
    return (

        <TextField
            className={classes.input}
            label="Търси по номер на поръчка, име на клиент или дата"
            id="searchbar"
            variant="outlined"
            size="small"
            onChange={onChangeHandler}
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />



    )
}

export default Searchbar;