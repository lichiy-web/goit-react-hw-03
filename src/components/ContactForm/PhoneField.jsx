import { useField, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { normalizePhoneNumber } from '../Contact/Contact.js';

const PhoneField = props => {
  const {
    values: { number },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    if (number.trim() !== '' && touched.number) {
      setFieldValue(props.name, normalizePhoneNumber(number));
    }
  }, [number, touched.number, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {/* {!!meta.touched && !!meta.error && <div>{meta.error}</div>} */}
    </>
  );
};

export default PhoneField;
