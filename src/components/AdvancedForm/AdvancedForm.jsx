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
        setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            dispatch(saveForm('personal', values));
            history.push('/steps/2')
            // dispatch(saveForm(1, values))
        }, 100);
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
                {/* <MyInputField label="First name" type="text" name="first_name" required={required} />
                <MyInputField label="Last name" type="text" name="last_name" required={required} />
                <MyInputField label="Job" type="text" name="job" required={required} />
                <MyInputField label="Phone" type="tel" name="phone" required={required} />
                <MyInputField label="Email" type="email" name="email" required={required} /> */}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting || Object.keys(errors).length || (!Object.keys(touched).length && !Object.values(values).some(x => x !== ''))}>Submit</button>
            </Form>
        )}
    </Formik>
}

export default AdvancedForm;
