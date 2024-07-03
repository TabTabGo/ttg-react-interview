import * as Yup from 'yup';

export const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

