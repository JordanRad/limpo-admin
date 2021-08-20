import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: '#C4E4D4',
        dark: "#214455",
        light: "#C4E4D4"
      },
      secondary: {
        main: '#cebfb3',
        light:"#B4DEF4"
      },
      error:{
        main:"#A80000",
        light:"#FF7A7A"
      },
      
  },
});

export default theme;