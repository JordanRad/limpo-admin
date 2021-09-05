import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalStateValue } from '../../context/GlobalStateProvider';

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

    const dispatch = useGlobalStateValue()[1];

    const classes = useStyles();
    
    const onChangeHandler = (e) => {
        dispatch({type:"update search input",payload:e.target.value})
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