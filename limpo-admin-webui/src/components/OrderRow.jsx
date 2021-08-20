import React from 'react';
import {makeStyles,FormControl,Input,InputLabel,FormHelperText} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    inl:{
        marginLeft:theme.spacing(2)
    }
  }));
export default function OrderRow (props){
    const {data}=props
    const classes = useStyles();
    const handleChange=()=>{
        return null
    }
    return(
        <div>
        <FormControl >
        <InputLabel htmlFor="component-helper">Вид услуга</InputLabel>
        <Input
          id="component-helper"
          value={data.addr}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl className={classes.inl}>
        <InputLabel htmlFor="component-helper">Брой</InputLabel>
        <Input
          id="component-helper"
          value={data.addr}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl className={classes.inl}>
        <InputLabel htmlFor="component-helper">Цена</InputLabel>
        <Input
          id="component-helper"
          value={data.addr}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      
      </div>
    )
}