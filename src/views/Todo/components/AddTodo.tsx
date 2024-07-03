import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TaskSchema } from '../../../services/validationSchemas';
import { Task } from '../../../types/Task';
import { useTaskStore } from '../../../stores/useTaskStore';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      alignItems: 'flex-start',
    },
    subRoot: {
      display: 'flex',
      gap: theme.spacing(2),
      width: '100%',
    },
    input: {
      flexGrow: 1,
    },
    errorMessage: {
      color: 'red',
    },
  })
);

type AddToDoProps = {
  onAddTask?: () => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const classes = useStyles();

  const addTask = useTaskStore(state => state.addTask);

  const initialValues = {
    title: '',
    description: '',
  };

  const handleAddTask = (values: { title: string; description: string }, { resetForm }: any) => {
    const newTask: Task = {
      id: Date.now(),
      title: values.title,
      description: values.description,
    };

    addTask(newTask);
    if (onAddTask) {
      onAddTask();
    }

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={TaskSchema} onSubmit={handleAddTask}>
      {({ handleSubmit }) => (
        <Form className={classes.root} onSubmit={handleSubmit}>
          <div className={classes.subRoot}>
            <div className="">
              <Field
                as={TextField}
                className={classes.input}
                id="addTaskInput"
                name="title"
                label="Title"
                variant="outlined"
                margin="dense"
              />
              <ErrorMessage name="title" component="div" className={classes.errorMessage} />
            </div>
            <div className="">
              <Field
                as={TextField}
                className={classes.input}
                id="addDescriptionInput"
                name="description"
                label="Description"
                variant="outlined"
                margin="dense"
              />
              <ErrorMessage name="description" component="div" className={classes.errorMessage} />
            </div>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodo;
