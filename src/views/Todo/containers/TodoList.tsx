import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/stores/store.dev';
import { Task } from '../../../types/Task';
import EmptyMessage from '../components/EmptyMessage';
import TodoCard from './../components/TodoCard';
import { useTodoServices } from './../hooks/useTodoServices';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: '10px',
      width: '100%',
      height: '500px',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      borderRadius: 8,
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    container: {
      width: '93%',
      margin: '0 auto',
      height: '100%',
    },
    tasks: {
      paddingBlock: '15px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },

    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.3em',
        borderRadius: 8,
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        borderRadius: 8,
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.grey['500'],
        outline: 'none',
      },
    },
  })
);

const TodoList = () => {
  const classes = useStyles();
  const tasks = useSelector<RootState, Array<Task>>(state => state.todo.current.tasks);
  const { getListOfTods } = useTodoServices();

  useEffect(() => getListOfTods(), []);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {tasks.length > 0 ? (
          <div className={classes.tasks}>
            {tasks.map((task, index) => (
              <TodoCard key={`task_${index}`} task={task} />
            ))}
          </div>
        ) : (
          <EmptyMessage />
        )}
      </div>
    </div>
  );
};

export default TodoList;
