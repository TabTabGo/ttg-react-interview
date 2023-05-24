import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

const TodoList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddTodo />
      <Todos/>
    </div>
  );
};

export default TodoList;
