import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import clsx from 'clsx';

const initialValues = {
  name: '',
  number: '',
  id: '',
};

const phoneNumberMask =
  /^(\d(?=-?\(?\d{3}\)?(-?\d){7}))?((?<=^\d)-)?((\((?=\d{3}\)))?\d{3}((?<=\(\d{3})\))?)?((?<=[\d|)])-)?(\d-?){7}$/i;

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneNumberMask, 'Must be a valid phone number!')
    .required('Required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (newContact, actions) => {
    newContact.id = nanoid();
    onAddContact(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.contactForm}>
        <label className={clsx(css.formItem, css.nameLabel)}>
          <span className={css.inputLabel}>Name</span>
          <Field className={css.inputItem} type="text" name="name" />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={clsx(css.formItem, css.numberLabel)}>
          <span className={css.inputLabel}>Number</span>
          <Field className={css.inputItem} type="text" name="number" />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={clsx(css.formItem, css.btn)} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
