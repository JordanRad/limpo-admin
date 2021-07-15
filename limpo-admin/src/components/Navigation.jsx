import React from 'react'
import {Drawer,List,ListItem,ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default function Navigation(props) {
const {drawerOpen,setDrawerOpen,linkTo} =props
return(
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
        <ListItem key="Добави поръчка" button onClick={(e)=>setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Добави поръчка</ListItemText>
        </ListItem>
      </List>
    </Drawer>
)

}