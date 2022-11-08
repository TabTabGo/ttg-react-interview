import React from 'react';
import { Task } from '../../../types/Task';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
type ViewTodosProps = {
  onRemoveTask: (id: number) => void;
  tasks: Task[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    icon: {
      color: '#121212',
    },
    item: {
      margin: '12px auto',
      backgroundColor: '#e84c3d',
      borderRadius: '20px',
      boxShadow: '0 8px 24px hsl(210deg 8% 62% / 20%)',
      padding: '12px',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);
const ViewTodos = ({ onRemoveTask, tasks }: ViewTodosProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={12}>
        <div>
          <List>
            {tasks.map(task => {
              return (
                <ListItem className={classes.item} key={task.id}>
                  <ListItemText primary={task.title} />
                  <ListItemSecondaryAction
                    onClick={() => {
                      onRemoveTask(task.id);
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

export default ViewTodos;
