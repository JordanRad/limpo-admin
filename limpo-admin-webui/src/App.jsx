import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme-config.js';
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import Dashboard from "./pages/Dashboard.jsx";
import Login from './pages/Login'
import Navigation from "./components/navigation/Navigation.jsx";
import NewOrderDialog from "./components/new-order/NewOrderDialog.jsx";
import AddLimpoUnit from "./components/limpo-units/AddLimpoUnit.jsx";
import LimpoUnitsPage from "./pages/LimpoUnitsPage.jsx";
import OrdersArchive from './pages/OrdersArchive.jsx';

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

function App() {
  let user = getUser()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(user != null)
  const getData = (data) => {
    console.log(data)
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <AppBar position="sticky" style={{ display: !isLoggedIn ? "none" : "block" }}>
          <Toolbar  >
            <IconButton edge="start"
              color="inherit" aria-label="menu" onClick={(e) => { setDrawerOpen(true) }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6" noWrap>
              Limpo Resource Planning Panel v1.0.0
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/archive">
            <OrdersArchive/>
          </Route>
          <Route path="/limpoUnits">
            <LimpoUnitsPage />
          </Route>
          <Route path="/neworder">
            <NewOrderDialog open={true} passData={getData} />
          </Route>
          <Route path="/newlimpounit">
            <AddLimpoUnit open={true} passData={getData} />
          </Route>
          <Route path="/*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
