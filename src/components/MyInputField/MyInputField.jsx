import React from 'react';
import { useField } from 'formik';

const MyInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  console.log(label, meta)

  return (
    <>
      {meta.touched ? '1' : '0'} :: {meta.error}
      <label className="form-label" htmlFor={meta.name}>{label}</label>
      <input className={`form-control ${(meta.touched && meta.error) ? 'is-invalid' : null}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </>
  );
}

export default MyInputField;
