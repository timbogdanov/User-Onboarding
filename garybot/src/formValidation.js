import * as Yup from 'yup';

const formValidation = Yup.object().shape({
  name: Yup
    .string()
    .min(6, "Name must be at least 6 characters long.")
    .required("Name is Required"),
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .required("Password is required."),
  terms: Yup
    .boolean()
    .oneOf([true], 'You must agree to Terms of Service')
});

export default formValidation