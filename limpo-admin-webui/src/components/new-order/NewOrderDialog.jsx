import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { FormControl, FormControlLabel, InputLabel, Input, FormHelperText, Switch } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import NewItemDialog from './NewItemDialog'
import { Redirect } from 'react-router-dom';
import { DateTimePicker } from "@material-ui/pickers";
import moment from 'moment';
import 'moment/locale/bg'
import OrderService from '../../services/OrderService';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    "& .MuiFormLabel-root.Mui-focused": {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.dark
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.dark,
    },
    height: "85vh",
    paddingTop: theme.spacing(5)
  },
  form: {
    padding: theme.spacing(4),

  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  inl: {
    margin: "0"
  },
  add: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    "&:hover": {
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.dark,
    },
    textAlign: "center",
    margin: theme.spacing(1, 0)
  },
  btn: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.dark,
    },
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: theme.spacing(1, 0)
  },
  smallInput: {
    width: "45%"
  }
}));


const convertDateToBg = (date) => {
  moment.locale("bg")
  let convertedDate = moment(date)
  return convertedDate.format("LLL")
}

export default function NewOrderDialog(props) {
  const { open, passData } = props
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(open);
  const [newServiceDialogOpen, setNewServiceDialogOpen] = useState(false)

  const [client, setClient] = useState({})
  const [orderItems, setOrderItems] = useState([])

  const [isCorporateClient, setIsCorporateClient] = useState(false);
  const [hasToRedirect, setHasToRedirect] = useState(false)

  const [selectedDate, handleDateChange] = useState(null);


  const saveData = async (e, reason) => {
    let clientDetails = client
    clientDetails.type = isCorporateClient ? "Корпоративен" : "Некорпоративен"
    // let scheduledAt = selectedDate !== null ? selectedDate.format("L") + "/" + selectedDate.format("LT") : ""
    let timestamp = selectedDate.toDate().getTime()
    let data = {
      timestamp: timestamp,
      orderItems: orderItems,
      client: client
    }
    

    let response = await OrderService.post("/orders/",data)
    console.log(response)
    if(response === undefined){
      alert("Телефонният номер и/или имейл адресът вече са вписани на друг клиент")
    }
    handleClose()
  };

  const handleClose = (e) =>{
    setDialogOpen(false);
    setHasToRedirect(true)
  }

  const onClientDetailsChanged = (field, value) => {
    setClient({ ...client, [field]: value })
  }

  const onRemoveItemClick = (deleteIndex) => {
    let updatedOrderItems = [...orderItems];
    updatedOrderItems.splice(deleteIndex, 1);
    setOrderItems(updatedOrderItems)
  }
  
  const addOrderItem = (datas) => {
    let updatedItems = [...orderItems]
    updatedItems.push(datas)
    setOrderItems(updatedItems)
  }


  const corporateClientDetals = [
    <FormControl key="cc-1" fullWidth>
      <InputLabel htmlFor="component-helper">Булстат</InputLabel>
      <Input
        id="bulstat"
        value={client.bulstat}
        onChange={(e) => onClientDetailsChanged('bulstat', e.target.value)}
        aria-describedby="component-helper-text"
      />
      <FormHelperText id="component-helper-text"></FormHelperText>
    </FormControl>,
    <FormControl key="cc-2" fullWidth>
      <InputLabel htmlFor="component-helper">VAT Номер</InputLabel>
      <Input
        id="vat"
        value={client.vatNumber}
        onChange={(e) => onClientDetailsChanged('vatNumber', e.target.value)}
        aria-describedby="component-helper-text"
      />
      <FormHelperText id="component-helper-text"></FormHelperText>
    </FormControl>
  ]

  if (hasToRedirect) {
    return <Redirect to={"/dashboard"} />
  } else {
    return (
      <div>
        <NewItemDialog open={newServiceDialogOpen} setOpen={setNewServiceDialogOpen} addOrderItem={addOrderItem} />
        <Dialog disableBackdropClick className={classes.root} open={dialogOpen} onClose={handleClose}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Нова Поръчка
              </Typography>
              <Button className={classes.btn} variant="outlined" autoFocus onClick={saveData}>
                Запиши
              </Button>
            </Toolbar>
          </AppBar>
          <form className={classes.form} noValidate autoComplete="off">
            <Typography>Въведи данни за поръчка</Typography>

            <FormControlLabel
              control={<Switch color="primary" className={classes.switch} checked={isCorporateClient} onChange={(e) => setIsCorporateClient(!isCorporateClient)} name="checkedA" />}
              label={isCorporateClient ? "Тип клиент: корпоративен" : "Тип клиент: некорпоративен"}
            />

            {
              isCorporateClient ? <FormControl fullWidth>
                <InputLabel htmlFor="component-helper">Име на клиента</InputLabel>
                <Input
                  id="corporatename"
                  value={client.corporateName}
                  onChange={(e) => onClientDetailsChanged('corporateName', e.target.value)}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text"></FormHelperText>
              </FormControl> :
                <div className={classes.row}>
                  <FormControl className={classes.smallInput}>
                    <InputLabel htmlFor="component-helper">Име на клиента</InputLabel>
                    <Input
                      id="firstName"
                      value={client.firstName}
                      onChange={(e) => onClientDetailsChanged('firstName', e.target.value)}
                      aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text"></FormHelperText>
                  </FormControl>
                  <FormControl className={classes.smallInput} >
                    <InputLabel htmlFor="component-helper">Фамилия на клиента</InputLabel>
                    <Input
                      id="lastName"
                      value={client.lastName}
                      onChange={(e) => onClientDetailsChanged('lastName', e.target.value)}
                      aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text"></FormHelperText>
                  </FormControl>
                </div>
            }

            <div className={classes.row}>
              <FormControl className={classes.smallInput}>
                <InputLabel htmlFor="component-helper">Имейл</InputLabel>
                <Input
                  id="email"
                  value={client.email}
                  onChange={(e) => onClientDetailsChanged('email', e.target.value)}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text"></FormHelperText>
              </FormControl>
              <FormControl className={classes.smallInput}>
                <InputLabel htmlFor="component-helper">Телефон</InputLabel>
                <Input
                  id="phone"
                  value={client.phone}
                  onChange={(e) => onClientDetailsChanged('phone', e.target.value)}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text">телефонeн номер във формат 08******</FormHelperText>
              </FormControl>
            </div>

            <FormControl fullWidth>
              <InputLabel htmlFor="component-helper">Адрес за изпълнение поръчката</InputLabel>
              <Input
                id="address"
                value={client.address}
                onChange={(e) => onClientDetailsChanged('address', e.target.value)}
                aria-describedby="component-helper-text"
              />
              <FormHelperText id="component-helper-text"></FormHelperText>
            </FormControl>

            {isCorporateClient ? corporateClientDetals : null}

            <FormControl fullWidth>
              <br />
              <DateTimePicker
                autoOk
                hideTabs
                ampm={false}
                value={selectedDate}
                clearable
                onChange={handleDateChange}
                allowKeyboardControl={false}
                minDate={new Date("2018-01-01")}
                helperText="Изберете дата за изпълнение"
                leftArrowButtonProps={{ "aria-label": "Prev month" }}
                rightArrowButtonProps={{ "aria-label": "Next month" }}

              />
            </FormControl>

            <FormControl fullWidth>
              <Button
                className={classes.add}
                onClick={() => setNewServiceDialogOpen(true)}
                variant="outlined"
                color="primary">
                Добави услуга
              </Button>

            </FormControl>
            <List>
              {orderItems.map((el, idx) => {
                return (
                  <ListItem key={idx}>
                    <ListItemText primary={el.name} secondary={`${el.quantity} x ${el.price} лв.`} />
                    <IconButton onClick={(e) => onRemoveItemClick(idx)} ><DeleteForeverIcon /></IconButton>
                  </ListItem>
                )
              })}
            </List>
          </form>
        </Dialog>
      </div>
    );
  }
}
