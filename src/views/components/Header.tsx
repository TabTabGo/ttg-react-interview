import { AppBar, Toolbar, Box, makeStyles, createStyles } from '@material-ui/core';
import Logo from '../../assets/img/logo.png';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';import { useDispatch, useSelector } from 'react-redux';
import { TodoActionTypes, switchMode } from '../Todo/actions';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {

      backgroundColor: "#fff",
      padding: "15px 10px",
      marginBottom: "15px"

    },
    wrapper: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',    
    width:"100%  ",
    },
    iconLight: {
      color: '#fff',
     
      cursor: 'pointer',
    },
    iconDark: {
      color: '#34415c',
      cursor: 'pointer',
    },
  })
);
const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.todo.current.mode);
  const switchmode =()=>{
    dispatch(switchMode())
 }
//    
  return (
    <header>
    <AppBar position="static" className={classes.root} style={{ backgroundColor: mode ? '#fff' : '#2A303C' }} >
      <Toolbar variant="dense">
        <Box className={classes.wrapper}>
          <img src={Logo} style={{width: '150px'}} alt="TabTabGo Logo" />
          <Box onClick={switchmode}>
        <Brightness4OutlinedIcon  className={mode ? classes.iconDark :  classes.iconLight} style={{cursor:"pointer"}}/>
        </Box>
        </Box>
      </Toolbar>
    </AppBar>
    </header>
  );
};

export default Header;