import { AppBar, Toolbar, Box, makeStyles, createStyles } from '@material-ui/core';
import Logo from '../../assets/img/logo.png';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#34415c",
      padding: "15px 10px",
      marginBottom: "50px"
    },
    img: {
      margin: '0 auto',
    }
  })
);
const Header = () => {
  const classes = useStyles();
  return (
    <header>
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <Box className={classes.img}>
          <img src={Logo} style={{width: '150px'}} alt="TabTabGo Logo" />
        </Box>
      </Toolbar>
    </AppBar>
    </header>
  );
};

export default Header;