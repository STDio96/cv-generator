import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
// import CustomError from './CustomError'
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import MyInputField from '../MyInputField/MyInputField';

const FirstStep = ({ title }) => {
  let required = false; // TODO: remove

  const dispatch = useDispatch();

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
    first_name: 'Sergo',
    last_name: 'Rim',
    job: 'mid2sen js developers',
    phone: '123456789',
    email: 'sergo@gmail.com'
    /* first_name: '',
    last_name: '',
    job: '',
    phone: '',
    email: '' */
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
      // alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      dispatch(saveForm(0, values))
      dispatch(saveForm(1, values))
    }, 100);
  }

  return <div className="col-12">
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={submitHandler}
        >
          {({ isSubmitting, errors, touched, values }) => (
            <Form className={`w-50 needs-validation ${isSubmitting ? 'was-validated' : ''}`}>
              <MyInputField label="First name" type="text" name="first_name" required={required} />
              <MyInputField label="Last name" type="text" name="last_name" required={required} />
              <MyInputField label="Job" type="text" name="job" required={required} />
              <MyInputField label="Phone" type="tel" name="phone" required={required} />
              <MyInputField label="Email" type="email" name="email" required={required} />
              <button type="submit" className="btn btn-primary" disabled={isSubmitting || Object.keys(errors).length || (!Object.keys(touched).length && !Object.values(values).some(x => x !== ''))}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
}

export default FirstStep;