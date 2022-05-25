import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import {addTodo}   from "../actions";
import { TodoActionTypes } from '../actions';
import { flexbox } from '@mui/system';


const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

type AddToDoProps = {
  onAddTask?: (todo: string) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const [title, settitle] = useState('')
  const classes = useStyles();
  const dispatch = useDispatch();

  const add =() =>{
    if (title != '' ) {
      // Dispatch the "todo added" action with this text
      //dispatch( TodoActionTypes.addTodo=(title))
      dispatch(addTodo(title))
    }
  }

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic" 
        label="Enter New Task" 
        variant="outlined"
        margin="dense"
        autoFocus={true}
        onChange={(e:any) =>settitle(e.target.value)}
      />
      <Button className='btn' variant="contained" endIcon={<AddIcon />} onClick={add}>Add Task</Button>
    </div>
  );
};
export default AddTodo;
