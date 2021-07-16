import React from 'react'
import { Drawer, List, ListItem, ListItemText, Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "250px",
  },

  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    },
    margin: "12px",
    width: "175px",
    textAlign: "center",
  }

}));
export default function Navigation(props) {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen, linkTo } = props
  return (
    <Drawer open={drawerOpen}>
      <List className={classes.root}>
        <ListItem key="Архив поръчки" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Архив поръчки</ListItemText>
        </ListItem>
        <ListItem key="Статистики" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Статистики</ListItemText>
        </ListItem>
        <ListItem key="Нови поръчки" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <Badge badgeContent={4} color="primary">
            <ListItemText>Нови поръчки &nbsp;</ListItemText>
          </Badge>
        </ListItem>
        <ListItem className={classes.button} key="Добави поръчка" button onClick={(e) => setDrawerOpen(false)} component={Link} to="/dashboard">
          <ListItemText>Добави поръчка</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )

}