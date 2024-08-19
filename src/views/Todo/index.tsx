import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import TodoList from './containers/TodoList';

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%"
  },
}));

const Todo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <TodoList />
    </div>
  );
};

export default Todo;
