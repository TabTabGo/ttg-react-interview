import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { Task } from '../../../types/Task';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    taskList: {
      marginTop: theme.spacing(2),
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
    },
    taskDetails: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      marginRight: theme.spacing(2),
      overflow: 'hidden',
    },
    taskTitle: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(0.5),
    },
    description: {
      color: theme.palette.text.secondary,
      wordBreak: 'break-word',
    },
  })
);

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
};

const TaskList = ({ tasks, onDeleteTask }: TaskListProps) => {
  const classes = useStyles();

  return (
    <div className={classes.taskList}>
      {tasks.map((task: Task) => (
        <Box key={task.id} className={classes.taskItem} component={Paper}>
          <div className={classes.taskDetails}>
            <Typography variant="h6" className={classes.taskTitle}>
              {task.title}
            </Typography>
            <Typography variant={'caption'} className={classes.description}>
              {task?.description}
            </Typography>
          </div>
          <Button variant="contained" color="secondary" onClick={() => onDeleteTask(task.id)}>
            Delete
          </Button>
        </Box>
      ))}
    </div>
  );
};

export default TaskList;
