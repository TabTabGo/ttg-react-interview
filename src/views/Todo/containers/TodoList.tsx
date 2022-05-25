import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import { useSelector } from "react-redux";
import { Button } from '@material-ui/core';
import {removeTodo}   from "../actions";
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state:any)=>state.todo.current.todo);
  console.log(todos)
 // function delete(index){
   // dispatch(removeTodo(index));
  //}

  return (
    <div className={classes.root}>
      
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
             <AddTodo />
          </Typography>
          
            <List >
            {todos.map((todo:any,index:any) =>
          (
            (
              <ListItem className='todo-item'
                secondaryAction={
                  <IconButton edge="end" color='error' aria-label="delete" onClick={()=>  dispatch(removeTodo(index))}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
             
                <ListItemText
                  primary={todo}
                  
                /> 
               
              </ListItem>
              
            )
        
          ))}
             
            </List>
         
      
     
    </div>
  );
};

export default TodoList;
