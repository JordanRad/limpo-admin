import React, { useEffect, useState } from 'react';
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
import LoginPage from './pages/LoginPage.jsx'
import Navigation from "./components/navigation/Navigation.jsx";
import NewOrderDialog from "./components/new-order/NewOrderDialog.jsx";
import AddLimpoUnit from "./components/limpo-units/AddLimpoUnit.jsx";
import LimpoUnitsPage from "./pages/LimpoUnitsPage.jsx";
import OrdersArchive from './pages/OrdersArchive.jsx';
import { GlobalStateProvider, initialState, useGlobalStateValue } from './context/GlobalStateProvider';
import { reducer } from './context/reducer';
import 'tachyons';
function App() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const globalState = useGlobalStateValue()[0]
  const getData = (data) => {
    console.log(data)
  }

  useEffect(()=>{
    console.log(globalState)
  },[globalState])
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          <AppBar position="sticky" style={{ display: !globalState.isLoggedIn ? "none" : "block" }}>
            <Toolbar>
              <IconButton edge="start"
                color="inherit" aria-label="menu" onClick={(e) => { setDrawerOpen(true) }}>
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6" noWrap>
                Limpo Resource Planning System v1.0.0
              </Typography>
              <Button color="inherit"></Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/archive">
              <OrdersArchive />
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
