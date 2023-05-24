import * as yup from 'yup';

export const taskFormSchema = yup.object().shape({
  title: yup.string().min(3, 'min length is 3 charts').required('please enter title'),
  description: yup.string().max(150, 'max length is 150 charts'),
});
