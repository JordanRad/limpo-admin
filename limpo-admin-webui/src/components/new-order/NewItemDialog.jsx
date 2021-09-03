import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, FormControl, InputLabel, FormHelperText, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

  inl: {
    margin: theme.spacing(1),
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4)
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.error.light,
      borderColor: theme.palette.error.main,
      color: "black",
    },
    textAlign: "center",
  },
  save: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    "&:hover": {
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.dark,
    },
    textAlign: "center",
  },
  "& .MuiInputBase-input:focus": {
    backgroundColor: theme.palette.primary.dark
  },
  
}));

export default function NewItemDialog(props) {
  const { open, setOpen, saveData } = props
  const [helpers, setHelpers] = useState({ type: "", qty: "", price: "" })
  const [serviceType, setServiceType] = useState('')
  const [serviceQty, setServiceQty] = useState(0)
  const [servicePrice, setServicePrice] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Чистене прозорци',
      type: '',
      description: '',
      price: 2.30
    },
    {
      id: 2,
      name: 'Чистене етаж',
      type: 'Чистене на вход',
      description: '',
      price: 15.30
    },
    {
      id: 3,
      name: 'Дезинфекция',
      type: '',
      description: '',
      price: 32.30
    },
  ]
  const classes = useStyles();

  const handleClose = () => {
    setServiceType('')
    setServiceQty(0)
    setServicePrice(0)
    setOpen(false);
    setHelpers({ type: "", qty: "", price: "" })

  };
  const handleSave = () => {
    if (serviceType === '') {
      helpers.type = "Задължително"
      setHelpers({ ...helpers })
    }
    else {
      helpers.type = ""
      setHelpers({ ...helpers })
    }
    if (parseInt(serviceQty) <= 0) {
      helpers.qty = "Невалиден брой"
      setHelpers({ ...helpers })
    }
    else {
      helpers.qty = ""
      setHelpers({ ...helpers })
    }
    if (parseInt(servicePrice) <= 0) {
      helpers.price = "Невалидна цена"
      setHelpers({ ...helpers })
    }
    else {
      helpers.price = ""
      setHelpers({ ...helpers })
    }
    if (helpers.price === "" && helpers.qty === "" && helpers.type === "") {
      saveData({ serviceType: serviceType, serviceQty: parseInt(serviceQty) || 0, servicePrice: parseFloat(servicePrice) || 0 })
      handleClose()
    }
  }


  return (
    <div>
      <Dialog disableBackdropClick open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="dialog-title">Добавяне услуга към поръчка</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Моля изберете услуга за добавяне
          </DialogContentText>
          <div>

            <FormControl className={classes.inl} fullWidth>
              <InputLabel id="dialog-select-label">Избери Услуга</InputLabel>
              <Select
                style={{width:"30em"}}
                error={helpers.type!==""}
                id="dialog-select"
                value={serviceType.name?serviceType.name:""}
                onChange={(e) => (setServiceType(products.find(el=>el.name===e.target.value)))}
              >
                {
                  products.map((el, idx) => (
                    <MenuItem key={idx} value={el.name}>{el.name}</MenuItem>
                  ))
                }

              </Select>
              <FormHelperText>{helpers.type}</FormHelperText>
            </FormControl>
            <FormControl className={classes.inl}>
              <TextField
                label="Брой"
                error={helpers.qty!==""}
                id="number-helper"
                value={serviceQty || ""}

                onChange={(e) => (setServiceQty(e.target.value))}
                aria-describedby="component-helper-text"
                type="number"
                autoComplete="off"
              />
              <FormHelperText id="helper-text">{helpers.qty}</FormHelperText>
            </FormControl>
            <FormControl className={classes.inl}>
              {/* <InputLabel htmlFor="component-helper">Цена</InputLabel> */}
              <TextField
                label="Цена"
                error={helpers.price!==""}
                id="price-helper"
                value={servicePrice || ""}
                onChange={(e) => (setServicePrice(e.target.value))}
                aria-describedby="component-helper-text"
                type="number"
                step="0.05"
                autoComplete="off"
              />
              <FormHelperText id="component-helper-text">{helpers.price}</FormHelperText>
            </FormControl>

          </div>
        </DialogContent>
        <DialogActions className={classes.actions}>
        <Button className={classes.error} variant="outlined" onClick={handleClose} color="primary">
            Откажи
          </Button>
          <Button className={classes.save} variant="outlined" onClick={handleSave} color="primary">
            Запиши
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}
