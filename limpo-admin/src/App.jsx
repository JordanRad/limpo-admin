import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme-config.js';
import LogIn from './pages/LogIn'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/dashboard">
            <h1>dashboard</h1>
          </Route>

          <Route path="/place-order">
            <h2>place order</h2>
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
