import * as yup from 'yup';

export const registerUserSchema = yup.object({
   firstName: yup.string().min(3).max(20).required(),
   lastName: yup.string().min(3).max(20).required(),
   username: yup.string().min(5).max(30).required(),
   email: yup.string().email().required(),
   password: yup.string().min(6).required(),
   profilePicture: yup.string(),
});

export const loginUserSchema = yup.object({
   email: yup.string().email().required(),
   password: yup.string().min(6).required(),
});
