import { createTheme ,responsiveFontSizes} from '@material-ui/core/styles';

let theme = createTheme({
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
theme = responsiveFontSizes(theme);
export default theme;