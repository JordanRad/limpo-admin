import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "space-between",
        alignItems: "center",
        "& .MuiFormLabel-root.Mui-focused": {
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark
        },
        "& .MuiInput-underline:after": {
            borderColor: theme.palette.primary.dark,
        },
        marginTop:theme.spacing(2)
    },
       

}));


const Searchbar = (props) => {
    let { placeholder } = props

    const [input,setInput] = useState("")

    const classes = useStyles();

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className={classes.root}>
            <TextField
                label={"Търсене"}
                id="searchbar"
                size="small"
                helperText={placeholder}
                onChange={onChangeHandler}
                autoComplete="off"
            />
        </div>

    )
}

export default Searchbar;