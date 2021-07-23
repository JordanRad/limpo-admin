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

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

function App() {
  let user = getUser()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(user != null)

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

          <Route path="/place-order">
            <h2>place order</h2>
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
