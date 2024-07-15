import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./RegisterForm.module.css";
import * as Yup from "yup";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values))
        .unwrap()
        .then(() => {
          toast.success("Registration successful!");
          resetForm();
        })
        .catch(() => {
          toast.error("Registration failed. Please try again.");
        });
    },
  });

  return (
    <form
      className={css.form}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <label className={css.label} htmlFor="name">
        Username
        <input
          id="name"
          name="name"
          type="text"
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </label>

      <label className={css.label} htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </label>

      <label className={css.label} htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </label>

      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
