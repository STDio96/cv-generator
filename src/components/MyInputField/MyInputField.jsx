import React from 'react';
import { useField } from 'formik';

const MyInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label className="form-label" htmlFor={field.name}>{label}</label>
      <input id={field.name} className={`form-control ${(meta.touched && meta.error) ? 'is-invalid' : ''}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </>
  );
}

export default MyInputField;
