import { Task } from '../../../types/Task';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../actions';
import TaskService from '../../../services/TasksService';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';


const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& .MuiInput-underline:after': {
        borderBottomColor: '#D6E4F0',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#D6E4F0',
      },
      '& .MuiInputBase-input': {
        color: '#D6E4F0',
      }
    },
    btn: {
     backgroundColor: theme.palette.error.dark,
     color: theme.palette.text.primary,
     
    },
    form:{
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      color: '#D6E4F0',
      margin:'10px'
    },
    
  })
);

const AddTodo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const Service = new TaskService();

  const addTodo = (payload: Task) => {
    Service.addTask(payload);
    dispatch(TodoActions.addTodo(payload));
  };

  const formik = useFormik({
    initialValues: {
      addTaskInput: '',
    },
    validationSchema: yup.object().shape({
      addTaskInput: yup.string().required('Please Fill This Field'),
    }),
    onSubmit: (values, {resetForm}) => {
    addTodo({ 
        id: Math.round(Math.random() + Date.now()),
        title: values.addTaskInput 
      });
    resetForm();
    },
  });

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          id="addTaskInput"
          label="Title"
          margin="dense"
          className={classes.input}
          autoFocus={true}
          value={formik.values.addTaskInput}
          onChange={formik.handleChange}
          error={formik.touched.addTaskInput && Boolean(formik.errors.addTaskInput)}
          helperText={formik.touched.addTaskInput && formik.errors.addTaskInput}
        />
        <Button type='submit' className={classes.btn}>Add Task</Button>
      </form>
    </div>
  );
};

export default AddTodo;
