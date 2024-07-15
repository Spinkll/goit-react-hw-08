import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неверный формат email")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Обязательное поле"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Access!");
        resetForm();
      })
      .catch(() => {
        toast.error("Error!");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" className={css.button} disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
