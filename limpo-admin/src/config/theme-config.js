import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
      primary: {
        main: '#033449'
      },
      secondary: {
        main: '#5AC4F2',
      }
  },
});

export default theme;