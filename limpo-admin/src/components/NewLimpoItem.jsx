import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles,FormControl,Input,InputLabel,FormHelperText,Select,MenuItem} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    
    inl:{
        marginLeft:theme.spacing(2)
    }
  }));

export default function NewLimpoItem(props) {
    const {open}=props
  
 
  const [limpoItemName,setLimpoItemName]=React.useState('')
  const [helpers,setHelpers]=React.useState({name:""})
  const [dOpen,setDOpen]=React.useState(open)

  const limpoItems=[
    {id:1,
    name:'Чистене прозорци',
    type:'',
    description:'',
    price:2.30},
    {id:2,
        name:'Чистене етаж',
        type:'Чистене на вход',
        description:'',
        price:15.30},
        {id:3,
            name:'Дезинфекция',
            type:'',
            description:'',
            price:32.30},
]
  const classes = useStyles();
    const saveData=(data)=>{
        console.log(data)
    }
  const handleClose = () => {
      
      setLimpoItemName('')
    setDOpen(false);
  };
  
  const handleSave=()=>{
      const exists=limpoItems.find(({name})=>(name===limpoItemName))
      console.log(exists)
      if(limpoItemName===''){
          helpers.name="Името Задължително"
          setHelpers({...helpers})
        }
        else
        if (exists){
            helpers.name="Има услуга с такова име"
            setHelpers({...helpers})
        }
        else{
            helpers.name=""
          setHelpers({...helpers})
        }
        
        if(helpers.name===""){
      saveData({limpoItemName:limpoItemName})
    handleClose()    
    }
    }
 

  return (
    <div>
      
      <Dialog open={dOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Нова услуга</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Моля въведете име на новата услуга
          </DialogContentText>
          <div>
       
        
     
      <FormControl >
        {/* <InputLabel htmlFor="component-helper">Брой</InputLabel> */}
        <TextField
        fullWidth
        label="Име на услугата"
        error={helpers.name}
        helperText={helpers.name}
          id="component-helper"
          value={limpoItemName||""}
         
          onChange={(e)=>(setLimpoItemName(e.target.value))}
          aria-describedby="component-helper-text"
          type="text"
          autoComplete="off"
        />
        <FormHelperText id="component-helper-text"></FormHelperText>
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
