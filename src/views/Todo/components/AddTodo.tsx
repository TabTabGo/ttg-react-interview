import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskService from '../../../services/TasksService';
import React, { useEffect } from 'react';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: '10px',
    },
    btn: {
      backgroundColor: 'teal',
      color: theme.palette.text.primary,
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      '&:hover': {
        backgroundColor: '#014D4E',
      },
    },
    form_content: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
    input: {
      '& .MuiInputBase-input': {
        color: (props: { mode: string }) => (props.mode ? 'black' : 'white'),
      },
    },
    error: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: '5px',
    },
  })
);

type AddToDoProps = {
  onAddTask?: (todo: { id: number; title: string }) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const mode = useSelector((state: any) => state.todo.current.mode);
  const classes = useStyles({ mode: mode });
  
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setError('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() !== '') {
      const id = Date.now(); // Generate a unique id
      const todo = { id, title };
      onAddTask && onAddTask(todo);
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Box className={classes.form_content}>
          <TextField
            id="addTaskInput"
            name="title"
            label="Title"
            margin="dense"
            autoFocus={true}
            value={title}
            onChange={handleTitleChange}
            error={!!error}
            helperText={error}
            className={classes.input}
          />
          <Button type="submit" variant="contained" className={classes.btn}>
            +
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddTodo;
