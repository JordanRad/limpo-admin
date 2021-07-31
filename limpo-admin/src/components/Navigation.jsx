import React,{useState} from 'react'
import {Drawer,List,ListItem,ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default function Navigation(props) {
const {drawerOpen,setDrawerOpen,linkTo} =props

const getData=(data)=>{
  console.log(data)
}
return(
  <div>
<Drawer open={drawerOpen}>
<List>
        <ListItem key="Архив поръчки" button onClick={(e)=>setDrawerOpen(false)} component={Link} to="/dashboard"> 
          <ListItemText>Архив поръчки</ListItemText>
        </ListItem>
        <ListItem key="Статистики" button onClick={(e)=>setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Статистики</ListItemText>
        </ListItem>
        <ListItem key="Нови поръчки" button onClick={(e)=>setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Нови поръчки</ListItemText>
        </ListItem>
        <ListItem key="Добави поръчка" button onClick={(e)=>setDrawerOpen(false)} component={Link} to="/neworder" >
          <ListItemText>Добави поръчка</ListItemText>
        </ListItem>
        <ListItem key="Добави услуга" button onClick={(e)=>setDrawerOpen(false)} component={Link} to="/newlimpoitem" >
          <ListItemText>Добави услуга</ListItemText>
        </ListItem>
      </List>
    </Drawer>
    
    </div>
)

}