import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles,FormControl,Input,InputLabel,FormHelperText} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    
    inl:{
        marginLeft:theme.spacing(2)
    }
  }));

export default function NewServiceDdialog(props) {
    const {open,setOpen,saveData}=props
  const [helpers,setHelpers]=React.useState({type:"",qty:"",price:""})
  const [data, setData] = React.useState({addr:''});
  const [serviceType,setServiceType]=React.useState('')
  const [serviceQty,setServiceQty]=React.useState(0)
  const [servicePrice,setServicePrice]=React.useState(0)

  
  const classes = useStyles();
 
  const handleClose = () => {
      setServiceType('')
      setServiceQty(0)
      setServicePrice(0)
    setOpen(false);
  };
  const handleSave=()=>{
      if(serviceType===''){
          helpers.type="Задължително"
          setHelpers({...helpers})
        }
        else{
            helpers.type=""
          setHelpers({...helpers})
        }
        if(parseInt(serviceQty)<= 0){
            helpers.qty="Невалиден брой"
            setHelpers({...helpers})
          }
          else{
            helpers.qty=""
          setHelpers({...helpers})
        }
        if(parseInt(servicePrice)<= 0){
            helpers.price="Невалидна цена"
            setHelpers({...helpers})
          }
          else{
            helpers.price=""
          setHelpers({...helpers})
        }
        if(helpers.price==""&&helpers.qty==""&&helpers.type==""){
      saveData({serviceType:serviceType,serviceQty:parseInt(serviceQty)||0,servicePrice:parseFloat(servicePrice)||0})
    handleClose()    
    }
    }
 

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавяне услуга към поръчка</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Моля изберете услуга за добавяне
          </DialogContentText>
          <div>
        <FormControl className={classes.inl} >
        {/* <InputLabel htmlFor="component-type">Вид услуга</InputLabel> */}
        <TextField
        //variant="filled"
        label="Вид услуга"
        error={helpers.type}
        helperText={helpers.type}
          id="component-type"
          value={serviceType}
          defaultValue={''}
          onChange={(e)=>(setServiceType(e.target.value))}
          aria-describedby="component-helper-text-type"
          type="text"
          autoComplete="off"
        />
       
      </FormControl>
      <FormControl className={classes.inl}>
        {/* <InputLabel htmlFor="component-helper">Брой</InputLabel> */}
        <TextField
        label="Брой"
        error={helpers.qty}
        helperText={helpers.qty}
          id="component-helper"
          value={serviceQty||""}
         
          onChange={(e)=>(setServiceQty(e.target.value))}
          aria-describedby="component-helper-text"
          type="number"
          autoComplete="off"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
      </FormControl>
      <FormControl className={classes.inl}>
        {/* <InputLabel htmlFor="component-helper">Цена</InputLabel> */}
        <TextField
          label="Цена"
          error={helpers.price}
          helperText={helpers.price}  
          id="component-helper"
          value={servicePrice||""}
          onChange={(e)=>(setServicePrice(e.target.value))}
          aria-describedby="component-helper-text"
          type="number"
          autoComplete="off"
        />
        {/* <FormHelperText id="component-helper-text">kllklk</FormHelperText> */}
      </FormControl>
      
      </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Откажи
          </Button>
          <Button onClick={handleSave} color="primary">
            Запиши
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
