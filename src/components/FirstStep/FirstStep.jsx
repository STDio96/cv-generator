import React from 'react'
import { useDispatch } from 'react-redux'
import { formsJSON } from '../../forms'
import AdvancedForm from '../AdvancedForm/AdvancedForm';
import { useParams, useHistory } from 'react-router-dom'

const FirstStep = ({ title }) => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

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