import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import StatusButtonsContainer from './StatusButtonsContainer';
const useStyles = makeStyles(theme => ({
    input: {
        width: "45%",
    },
    root: {
        width: "100%",
        display: "flex",
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
    side: {
        display: "flex",
        alignItems:"flex-end",
        width: "40%",
        height: "40%",
        marginLeft: "auto",
        justifyContent: "center",

    },
    
    "& .MuiFormLabel-root.Mui-focused": {
        color: theme.palette.primary.dark
    },

}));

const statusFilters = ["all", "new", "pending", "approved"]
const buttonLabels = ["Всички", "Нови", "Чакащи", "Одобрени"]

const Searchbar = (props) => {
    let { placeholder } = props
    const [input, setInput] = useState("")
    const [status, setStatus] = useState("all")
    const classes = useStyles();

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }


    const onStatusFilterChange = (id) => {
        setStatus(id)
    }
    console.log("INPUT: " + input)
    console.log("STATUS: " + status)
    return (
        <div className={classes.root}>
            <TextField
                className={classes.input}
                label={placeholder}
                id="searchbar"
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
            <div className={classes.side}>
                <StatusButtonsContainer
                    buttonLabels={buttonLabels}
                    statusFilters={statusFilters}
                    active={status}
                    onClick={onStatusFilterChange} />
                <img alt="businessman" height="50em" src="./businessman.png"/>
            </div>
        </div>

    )
}

export default Searchbar;