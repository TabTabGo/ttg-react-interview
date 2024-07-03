import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'

import { blue, green, grey, orange, pink } from '@material-ui/core/colors';

const primary = '#3f51b5';
const secondary = '#ff4081';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
  palette: {
    type: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      light: '#ef5350',
      main: pink[500],
      dark: '#e53935',
    },
    warning: {
      light: '#ffa726',
      main: orange[500],
      dark: '#fb8c00',
    },
    success: {
      light: '#66bb6a',
      main: green[500],
      dark: '#43a047',
    },
    info: {
      light: '#26c6da',
      main: blue[500],
      dark: '#00acc1',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.10)',
      hover: '#f6f0ff',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.20)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    text: {
      primary: grey[900],
    },
    background:{
      default: grey[100],
      paper: '#ffffff',
    },
    
  },
  overrides: {
    MuiAppBar: {
      root: {
        '& button': {
          color: 'white',
        },
      },
    },
    MuiButton: {
      textPrimary: {
        color: primary,
      },
      outlinedPrimary: {
        color: primary,
      },
      contained: {
        '&.Mui-disabled': {
          opacity: 0.5,
        },
      },
    },
    MuiInputLabel: {
      shrink: {
        color: grey[400],
      },
    },
    MuiFormLabel: {
      root: {
        color: grey[400],
      },
    },
    MuiFormControl: {
      marginDense: {
        marginTop: 4,
        marginBottom: 4,
      },
    },
    MuiInput: {
      root: {
        color: 'black'
      },
      underline: {
        '&:after': {
          borderBottom: `2px solid ${primary}`,
        },
        // '&$focused:after': {
        //   borderBottomColor: `#10678c`,
        // },
        // '&:hover:not($disabled):not($focused):not($error):after': {
        //   borderBottom: `2px solid #eee`,
        // },
        // '&$disabled:before': {
        //   borderBottom: `1px dotted #aaa`,
        // },
      },
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: grey[50],
        color: '#333333',
        '&:hover': {
          backgroundColor: `white !important`,
        },
        '&.Mui-focused': {
          backgroundColor: 'white',
          color: '#333333',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        color: 'black'
      },
      adornedEnd: {
        paddingRight: 4,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 17,
        color: '#868686',
      },
    },
  },
});

theme.typography.caption = {
  fontSize: '0.8rem',
};

export default responsiveFontSizes(theme);
