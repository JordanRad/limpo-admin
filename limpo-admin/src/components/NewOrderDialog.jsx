import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {FormControl,InputLabel,Input,FormHelperText} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import OrderRow from './OrderRow';

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewOrderDialog(props) {
    const {newOrderOpen,setNewOrderOpen}=props
  const classes = useStyles();
  const [open, setOpen] = React.useState(newOrderOpen);
  const [data,setData]= React.useState({})
  const [orderItems,setOrderItems]=React.useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange=()=>{
      return null
  }

  return (
    <div>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             Нова Поръчка
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Запиши
            </Button>
          </Toolbar>
        </AppBar>
        <form className={classes.root} noValidate autoComplete="off">
      
      <FormControl fullWidth>
        <InputLabel htmlFor="component-helper">Име на клиента</InputLabel>
        <Input
          id="component-helper"
          value={data.name}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="component-helper">Телефон</InputLabel>
        <Input
          id="component-helper"
          value={data.tel}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">телефонът във формат 08******</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="component-helper">Адрес за изпълнение поръчката</InputLabel>
        <Input
          id="component-helper"
          value={data.addr}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl className={classes.inl}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      </FormControl>
      <OrderRow data={{}}/>
      <List>
          <ListItem button>
              <ListItemText primary="Услугата 1" secondary ="1x23.00 лв."/>
          </ListItem>
      </List>
      <List>
          <ListItem button>
              <ListItemText primary="Услугата 2" secondary ="1x23.00 лв."/>
          </ListItem>
      </List>
      
      
    </form>
      </Dialog>
    </div>
  );
}
