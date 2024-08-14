import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';

import { useFormik } from 'formik';
import { todoSchema } from '../../../utils/validators/todo-schema';
import { AddTodoValues } from '../../../types/Task';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},

    fieldContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '800px',
    },
    buttonStyles: {
      marginTop: '0.5rem',
    },
  })
);

type AddToDoProps = {
  onAddTask: (todo: string) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const classes = useStyles();
  const { errors, touched, handleChange, values, handleBlur, handleSubmit, resetForm } =
    useFormik<AddTodoValues>({
      validationSchema: todoSchema,
      onSubmit: values => {
        onAddTask(values.title);
        resetForm();
      },
      initialValues: { title: '' },
      validateOnBlur: false,
    });
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Box className={classes.fieldContainer}>
        <TextField
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          error={touched.title && !!errors.title}
          helperText={touched.title && errors.title}
          id="addTaskInput"
          label="Title"
          variant="outlined"
          margin="dense"
          autoFocus={true}
        />
      </Box>
      <Button
        disableElevation
        className={classes.buttonStyles}
        type="submit"
        color="primary"
        variant="contained"
      >
        Add Task
      </Button>
    </form>
  );
};

export default AddTodo;
