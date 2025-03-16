import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Your name is too long")
    .required("This field is required"),
  number: Yup.string().required("This field is required"),
});

export default function UserForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    // console.log('handleSubmit', values);
    onAdd(values);
    actions.resetForm();

    return (
      <Formik
        initialValues={{
          name: "",
          number: "",
          id: "",
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.group}>
            <label className={css.label}>Name</label>
            <Field className={css.input} type="text" name="username" />
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>

          <div className={css.group}>
            <label className={css.label}>Number</label>
            <Field className={css.input} type="email" name="number" />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  };
}
