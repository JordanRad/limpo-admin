import React from 'react'
import { Drawer, List, ListItem, ListItemText, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "250px",
    padding: 0,
    backgroundColor:"#eef7f2",
    height:"100%"
  },

  button: {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
    width:"14em"
  },

  li: {
    marginBottom: "4px",
    height: "56px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      borderTop: "0.5px solid",
      borderBottom: "0.5px solid",
      borderColor: theme.palette.primary.dark,
    },
  },
  icon: {
    color: theme.palette.primary.dark
  }
}));
export default function Navigation(props) {

  const classes = useStyles();
  const { drawerOpen, setDrawerOpen } = props

  return (
    <Drawer open={drawerOpen}>
      <List className={classes.root}>
        <ListItem className={classes.li} key="Затвори" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <CloseIcon />&nbsp; Затвори
        </ListItem>
        <ListItem className={classes.li} key="Текущи поръчки" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Текущи поръчки</ListItemText>
        </ListItem>
        <ListItem className={classes.li} key="Архив поръчки" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/archive">
          <ListItemText>Архив поръчки</ListItemText>
        </ListItem>
        <ListItem className={classes.li} key="Услуги" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/limpoUnits">
          <ListItemText>Услуги</ListItemText>
        </ListItem>
        <ListItem key="Добави поръчка" component={Link} to="/neworder">
          <Button className={classes.button} onClick={(e) => setDrawerOpen(false)} variant="outlined">Добави поръчка</Button>
        </ListItem>
        <ListItem className={classes.li} key="Излизане" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ExitToAppIcon />&nbsp;&nbsp;&nbsp;Излез
        </ListItem>
      </List>
    </Drawer>)

}