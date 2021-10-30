import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './styles/index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { GlobalStateProvider, initialState } from './context/GlobalStateProvider';
import { reducer } from './context/reducer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment'; 
ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider reducer={reducer} initialState={initialState}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
