import { createTheme } from '@material-ui/core';
import { deepPurple, grey, red, teal } from '@material-ui/core/colors';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const primary = deepPurple[700]; // Muted deep purple
const secondary = red[400]; // Soft teal

const lightMode: PaletteOptions = {
  type: 'light',
  primary: {
    main: primary,
  },
  secondary: {
    main: secondary,
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
    contrastText: '#fff',
  },
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
  },
  info: {
    light: '#4fc3f7',
    main: '#29b6f6',
    dark: '#0288d1',
  },
  background: {
    default: grey[100],
    paper: '#fff',
  },
  text: {
    primary: '#333',
    secondary: grey[700],
  },
};

const darkMode: PaletteOptions = {
  type: 'dark',

  primary: {
    main: primary,
  },
  secondary: {
    main: secondary,
  },
  error: {
    light: red[400],
    main: red[600],
    dark: red[800],
    contrastText: '#fff',
  },
  warning: {
    light: '#ffcc80',
    main: '#ffb74d',
    dark: '#f57c00',
  },
  success: {
    light: '#a5d6a7',
    main: '#81c784',
    dark: '#4caf50',
  },
  info: {
    light: '#81d4fa',
    main: '#4fc3f7',
    dark: '#0288d1',
  },
  background: {
    default: '#121212',
    paper: '#1d1d1d',
  },
  text: {
    primary: '#e0e0e0',
    secondary: grey[500],
  },
};

const commonOverrides = {
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
      color: grey[400],
    },
    underline: {
      '&:after': {
        borderBottom: `2px solid ${primary}`,
      },
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
      color: primary,
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
};

const lightTheme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  palette: lightMode,
  overrides: commonOverrides,
});

const darkTheme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  palette: darkMode,

  overrides: commonOverrides,
});

lightTheme.typography.caption = {
  fontSize: '0.8rem',
};

darkTheme.typography.caption = {
  fontSize: '0.8rem',
};

export { lightTheme, darkTheme };
