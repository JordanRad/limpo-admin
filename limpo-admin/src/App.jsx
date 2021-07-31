import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme-config.js';
import LogIn from './pages/LogIn'
import Navigation from "./components/Navigation.jsx";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react';

import Dashboard from "./pages/Dashboard.jsx";

import NewOrderDialog from "./components/NewOrderDialog.jsx";
import NewLimpoItem from "./components/NewLimpoItem.jsx";


const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

function App() {
  let user = getUser()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [newLimpoItemOpen,setNewLimpoItemOpen]=useState(false)
  const [newOrderOpen,setNewOrderOpen]=useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(user != null)
  const getData=(data)=>{
    console.log(data)
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          <Route path="/neworder">
          <NewOrderDialog open={true} passData={getData}/>
          </Route>
          <Route path="/newlimpoitem">
          <NewLimpoItem open={true} passData={getData}/>
          </Route>
          <Route path="/*">
            <Redirect to="/login" />
          </Route>

        </Switch>
        <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <AppBar style={{ display: !isLoggedIn ? "none" : "block" }}>
          <Toolbar  >
            <IconButton edge="start" 
              color="inherit" aria-label="menu" onClick={(e) => { setDrawerOpen(true) }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6" noWrap>
              Limpo Admin Panel v1.0.0
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
    
    
      </Router>
    </ThemeProvider>
  );
}

export default App;
