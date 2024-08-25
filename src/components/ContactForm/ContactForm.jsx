import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const initialValues = { username: "", usernumber: "" };

export default function ContactForm({ onAdd }) {
  const inputSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "This name is too short! Check errors in the name!")
      .max(50, "This name contains a lot symbols! Please correct")
      .required("*Required"),
    usernumber: Yup.string()
      .matches(/^[\d-]+$/, "Phone number is not valid")
      .min(9, "This number is too short!")
      .max(12, "This number contains a lot symbols!")
      .required("*Required"),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.username,
      number: values.usernumber,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={inputSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="username">
          Name
        </label>
        <Field
          type="text"
          name="username"
          id="username"
          className={css.field}
        />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errorMessage}
        />

        <label className={css.label} htmlFor="usernumber">
          Number
        </label>
        <Field
          type="text"
          name="usernumber"
          id="usernumber"
          className={css.field}
        />
        <ErrorMessage
          name="usernumber"
          component="span"
          className={css.errorMessage}
        />

        <button className={css.btn} type="submit ">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
