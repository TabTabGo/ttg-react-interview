import TitleIcon from '@material-ui/icons/Title';
import ShortTextIcon from '@material-ui/icons/ShortText';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useAppDispatch } from '../../../../hooks/useAppDipatch';
import { TodoActions } from '../../redux/actions';
import { useFormik } from 'formik';
import { taskFormSchema } from '../../../../schemas/taskFormSchema';
import { useStyles } from './styles';
interface AddTaskFormProps {
  onSubmit: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddTaskForm = ({ onSubmit, setOpen }: AddTaskFormProps) => {
  const dispatch = useAppDispatch();
  const { addTodo } = new TodoActions();
  const { values, handleBlur, handleChange, errors, touched, handleSubmit, getFieldProps } =
    useFormik({
      initialValues: {
        title: '',
        description: '',
      },
      validationSchema: taskFormSchema,
      onSubmit: values => {
        dispatch(
          addTodo({
            title: values.title,
            description: values.description,
          })
        );
        setOpen(false);
      },
    });
  const styles = useStyles();
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TitleIcon
              color={
                errors.title && touched.title ? 'error' : values.title ? 'primary' : 'disabled'
              }
            />
          </Grid>
          <Grid item className={styles.field}>
            <TextField
              required
              label="Title"
              error={errors.title ? true : false}
              onFocus={() => {
                console.log('test');
              }}
              fullWidth
              helperText={errors.title}
              {...getFieldProps('title')}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ShortTextIcon
              color={
                errors.description && touched.description
                  ? 'error'
                  : values.description
                  ? 'primary'
                  : 'disabled'
              }
            />
          </Grid>
          <Grid item className={styles.field}>
            <TextField
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description ? true : false}
              id="standard-error-helper-text"
              label="Description"
              multiline
              maxRows={2}
              helperText={errors.description}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" color="primary" variant="contained">
          Add Task 
        </Button>
      </form>
    </>
  );
};

export default AddTaskForm;
