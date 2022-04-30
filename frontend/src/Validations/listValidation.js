import * as yup from 'yup';

export const listSchema = yup.object({
  title: yup.string().required(),
  type: yup.string().required(),
  genre: yup.string().required(),
  content: yup.string()
})
