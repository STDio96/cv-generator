import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
// import CustomError from './CustomError'
import MyInputField from '../MyInputField/MyInputField';

const FirstStep = () => {
  let required = false; // TODO: remove

  /* const MyInputField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    // console.log(field, meta, helpers)
    return (
      <>
        <label className="form-label" htmlFor={meta.name}>{label}</label>
        // { {label} - {`${meta.error}`} - {(meta.touched && meta.error) ? '1' : '0'} }
        <input className={`form-control ${(meta.touched && meta.error) ? 'is-invalid' : null}`} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </>
    );
  }; */

  const initialValues = {
    first_name: '',
    last_name: '',
    job: '',
    phone: '',
    email: ''
  }

  const validate = (values) => {
    const errors = {};
    Object.entries(values).forEach(x => {
      if (!x[1]) {
        errors[x[0]] = `${x[0]} is required`;
      }
    });

    if (values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    console.log(errors)
    return errors;
  }

  const submitHandler = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 4200);
  }

  return <div className="col-12 d-flex justify-content-center">
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitHandler}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={`w-50 needs-validation ${isSubmitting ? 'was-validated' : ''}`}>
          {/* <div className="alert alert-danger">{JSON.stringify(touched)} :: {Object.keys(errors).length}</div> */}
          {/* Name:
          <Field type="text" name="first_name" className={`form-control ${errors.first_name && 'is-invalid'}`} required={required} />
          <ErrorMessage name="first_name" component={CustomError} />
          LastName:
          <Field type="text" name="last_name" className={`form-control ${errors.last_name && 'is-invalid'}`} required={required} />
          <ErrorMessage name="last_name" component="div" />
          Job:
          <Field type="text" name="job" className={`form-control ${errors.job && 'is-invalid'}`} required={required} />
          <ErrorMessage name="job" component="div" />
          Phone:
          <Field type="tel" name="phone" className={`form-control ${errors.phone && 'is-invalid'}`} required={required} />
          <ErrorMessage name="phone" component="div" />
          Email:
          <Field type="email" name="email" className={`form-control ${errors.email && 'is-invalid'}`} required={required} />
          <ErrorMessage name="email" component="div" /> */}
          <MyInputField label="First name" type="text" name="first_name"/*  className={`form-control ${errors.first_name && 'is-invalid'}`} */ required={required} />
          <MyInputField label="Last name" type="text" name="last_name"/*  className={`form-control ${errors.last_name && 'is-invalid'}`} */ required={required} />
          <MyInputField label="Job" type="text" name="job"/*  className={`form-control ${errors.job && 'is-invalid'}`} */ required={required} />
          <MyInputField label="Phone" type="tel" name="phone"/*  className={`form-control ${errors.phone && 'is-invalid'}`} */ required={required} />
          <MyInputField label="Email" type="email" name="email"/*  className={`form-control ${errors.email && 'is-invalid'}`} */ required={required} />
          <button type="submit" className="btn btn-primary" disabled={isSubmitting || Object.keys(errors).length || !Object.keys(touched).length}>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
}

export default FirstStep;