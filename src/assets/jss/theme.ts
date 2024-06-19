import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#29C979',
    },
    secondary: {
      main: '#d3d3d3',
    },
    background: {
      default: 'linear-gradient(30deg, #29C979 30%, #75E6DA 90%)',
    },
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
