import React from 'react'
import { Drawer, List, ListItem, ListItemText, Badge, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "250px",
  },

  button: {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
    },
  },

  li: {
    margin: "2px 0",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      borderTop: "0.5px solid",
      borderBottom: "0.5px solid",
      borderColor: theme.palette.primary.dark,
    },
  }


}));
export default function Navigation(props) {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen } = props
  return (
    <Drawer open={drawerOpen}>
      <List className={classes.root}>
        <ListItem className={classes.li} key="Затвори" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <CloseIcon />&nbsp;&nbsp;&nbsp;Затвори
        </ListItem>
        <ListItem className={classes.li} key="Архив поръчки" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Архив поръчки</ListItemText>
        </ListItem>
        <ListItem className={classes.li} key="Статистики" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Статистики</ListItemText>
        </ListItem>
        <ListItem className={classes.li} key="Нови поръчки" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <Badge badgeContent={4} color="primary">
            <ListItemText>Нови поръчки &nbsp;</ListItemText>
          </Badge>
        </ListItem>
        <ListItem key="Добави поръчка" component={Link} to="/dashboard">
          <Button className={classes.button} onClick={(e) => setDrawerOpen(false)} variant="outlined">Добави поръчка</Button>
        </ListItem>
        <ListItem className={classes.li} key="Излизане" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ExitToAppIcon />&nbsp;&nbsp;&nbsp;Излез
        </ListItem>
      </List>
    </Drawer>
  )

}