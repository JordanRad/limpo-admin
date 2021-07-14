import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme-config.js';

import LogIn from './pages/LogIn'
import DashboardPage from "./pages/DashboardPage.jsx";
function App() {
  return (
    <Router>
    
      <Switch>
        <Route path="/login">
        <ThemeProvider theme={theme}>
         <LogIn />
         </ThemeProvider>
        </Route>
        
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
