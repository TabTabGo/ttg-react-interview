import logo from 'assets/img/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddTask from 'views/Todo/components/AddTaskModal/AddTaskModal';
import { useStyles } from './styles';

function Header() {
  const styles = useStyles();
  return (
    <>
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="TabTabGo Logo" />
          </div>
          <AddTask />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
