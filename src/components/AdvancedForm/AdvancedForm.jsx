import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import MyInputField from '../MyInputField/MyInputField';
import { useHistory } from 'react-router-dom';

const AdvancedForm = ({ initialValues, validate, fields }) => {
    const dispatch = useDispatch();
    const personalInfo = useSelector(state => state.firstStep.personal);
    const history = useHistory();

    console.log(personalInfo, initialValues)

    const submitHandler = (values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(saveForm('personal', values));
        history.push('/steps/2')
    }

    return <Formik
        initialValues={personalInfo}
        validate={validate}
        onSubmit={submitHandler}
        validateOnMount={true}
    >
        {({ isSubmitting, errors, touched, values }) => (
            <Form className={`w-50 needs-validation ${isSubmitting ? 'was-validated' : ''}`}>
                {fields.map((field, i) => <MyInputField key={i} label={field.label} type={field.type} name={field.name} />)}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting || Object.keys(errors).length || (!Object.keys(touched).length && !Object.values(values).some(x => x !== ''))}>Submit</button>
            </Form>
        )}
    </Formik>
}

export default AdvancedForm;
