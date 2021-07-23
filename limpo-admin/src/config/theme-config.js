import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: '#96CFB3',
        dark: "#214455",
        light: "#C4E4D4"
      },
      secondary: {
        main: '#cebfb3',
        light:"#E1D8D0"
      },
      error:{
        main:"#A80000"
      },
      
  },
});

export default theme;