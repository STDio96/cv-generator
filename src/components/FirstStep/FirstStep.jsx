import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
// import CustomError from './CustomError'
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import MyInputField from '../MyInputField/MyInputField';
import { formsJSON } from '../../forms'
import AdvancedForm from '../AdvancedForm/AdvancedForm';
import { useParams, useHistory } from 'react-router-dom'

const FirstStep = ({ title }) => {
  let required = false; // TODO: remove

  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

  // history.block();

  return <div className="row">
    <div className="col-12">
      <h1 className="text-center">{title}</h1>
    </div>
    <div className="col-12 d-flex justify-content-center">
      {formsJSON.map(({ initialValues, validate, inputs }, id) => {
        return <AdvancedForm key={id} validate={validate} initialValues={initialValues} fields={inputs} />
      })}
    </div>
  </div>
}

export default FirstStep;