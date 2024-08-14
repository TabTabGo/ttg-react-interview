import {
  Box,
  Button,
  createStyles,
  Typography,
  IconButton,
  makeStyles,
  useTheme,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

interface Props {
  toggleTheme: () => void;
}
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 1,
      marginInlineStart: 'auto',
    },
    type: {
      marginInlineEnd: '0.5rem',
    },
  })
);

export default function ThemeToggler({ toggleTheme }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Button color="primary" onClick={toggleTheme}>
        <Typography className={classes.type}>{theme.palette.type} mode</Typography>
        {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button>
    </Box>
  );
}
