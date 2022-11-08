import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { useFormik, Form } from 'formik';
import * as yup from 'yup';
import { Task } from '../../../types/Task';
import { useSelector } from 'react-redux';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    button: {
      padding: '8px 15px',
      marginTop: '4px',
    },
    input: {
      ['& fieldset']: {
        borderRadius: '15px 0 0 15px',
      },
    },
  })
);

type AddToDoProps = {
  onAddTask: (todo: Task) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      addTaskInput: '',
    },
    validationSchema: yup.object().shape({
      addTaskInput: yup.string().required('This is a Required Field'),
    }),
    onSubmit: values => {
      console.log(values);
      onAddTask({ id: Math.floor(Math.random() * Date.now()), title: values.addTaskInput });
    },
  });
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="addTaskInput"
          name="addTaskInput"
          label="Title"
          variant="outlined"
          margin="dense"
          autoFocus={true}
          className={classes.input}
          value={formik.values.addTaskInput}
          onChange={formik.handleChange}
          error={formik.touched.addTaskInput && Boolean(formik.errors.addTaskInput)}
          helperText={formik.touched.addTaskInput && formik.errors.addTaskInput}
        />
        <Button className={classes.button} variant="contained" type="submit" color="primary">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
