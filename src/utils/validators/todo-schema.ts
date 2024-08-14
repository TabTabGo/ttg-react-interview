import * as Yup from 'yup';
export const todoSchema = Yup.object().shape({
  title: Yup.string().required('الرحاء إدخال عنوان المهمة'),
});
