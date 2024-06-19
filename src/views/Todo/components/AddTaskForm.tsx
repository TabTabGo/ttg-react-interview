import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../../../reducers/stores/actions';

const useStyles = makeStyles(theme =>
  createStyles({
    form: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(1),
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.primary.main, // Default border color
        },
        '&:hover fieldset': {
          borderColor: theme.palette.primary.main, // Hover border color
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.main, // Focus border color
        },
      },
    },
    button: {
      background: theme.palette.background.default, // Use the gradient from the theme
      color: '#fff',
    },
  })
);

const AddTaskForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { title: '' },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(TodoActions.addTodoAction(values.title));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <TextField
        id="title"
        name="title"
        placeholder="Task Title"
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true, // Prevent the label from shrinking
        }}
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        className={classes.input}
      />
      <Button color="primary" variant="contained" type="submit" className={classes.button}>
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
