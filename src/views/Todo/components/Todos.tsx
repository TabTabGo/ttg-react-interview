import {useEffect} from 'react'
import { Task } from '../../../types/Task';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TodoActions } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import TaskService from '../../../services/TasksService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    icon: {
      color: theme.palette.error.dark,
    },
    item: {
      margin: '10px auto',
      backgroundColor: '#D6E4F0',
      borderRadius: '10px',

    },
  })
);
const Todos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let tasks = useSelector((state: any) => state.todo.current.todos);
  const Service = new TaskService();
    
  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const deleteTodo = (id: number) => {
    dispatch(TodoActions.deleteTodo(tasks.id));
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={12}>
        <div>
          <List>
            {tasks.map((task: Task)=> {
              return (
                <ListItem className={classes.item} key={task.id}>
                    {console.log(Service.getTasks())}
                  <ListItemText primary={task.title} />
                  <ListItemSecondaryAction
                    onClick={() => {
                        Service.removeTask(task.id);
                        deleteTodo(task.id);
                    }}
                  >
                    <IconButton className={classes.icon} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default Todos;