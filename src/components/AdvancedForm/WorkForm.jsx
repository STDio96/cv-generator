import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import MyInputField from '../MyInputField/MyInputField';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup'

export const WorkList = ({ title }) => {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state.firstStep);
  const history = useHistory();

  const goBack = () => {
    console.log(history)
    history.goBack();
  }

  console.log('firstStep', currentState)
  if (!currentState.study) {
    if (!currentState.personal) {
      history.push('/steps/1')
    } else {
      history.push('/steps/2')
    }

    console.log('you should\'t be here')
    return <></>
  }

  const schema = Yup.object().shape({
    work: Yup.array().of(
      Yup.object().shape({
        job_title: Yup.string().min(3, "Please enter at least 3 characters").required("Required"),
        company: Yup.string().min(3, "Please enter at least 3 characters").required("Required"),
        start_date: Yup.date()
          .min("01-01-1970", "Looks like you're pretty old :D Enter date after 01.01.1970")
          .max(new Date(), "Couldn't be later than today")
          .max(Yup.ref("end_date"), "Start date should be earlier than graduation")
          .required("Required"),
        end_date: Yup.date()
          .min("01-01-1970", "I don't believe you -_- Enter date after 01.01.1970")
          .max(new Date(), "Couldn't be later than today")
          .required("Required"),
      })
    ),
  });

  return (
    <div className="row">
      <div className="col-12">
        <button onClick={goBack}>back</button>
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <Formik
          initialValues={
            {
              work: [
                ...currentState.work ?? { job_title: '', company: '', start_date: '', end_date: '' }
                /* { job_title: 'job title1', company: 'company 1', start_date: '2020-01-01', end_date: '2021-01-01' },
                { job_title: 'job title2', company: 'company 2', start_date: '2021-01-01', end_date: '2022-01-01' },
                { job_title: 'job title3', company: 'company 3', start_date: '2022-01-01', end_date: '2023-01-01' }, */
              ]
            }
          }
          validationSchema={schema}
          validateOnMount={true}
          onSubmit={values =>
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              dispatch(saveForm('work', values.work));

              history.push('/cv');
            }, 500)
          }
          render={({ values }) => (
            <Form className="w-50">
              <FieldArray
                name="work"
                render={arrayHelpers => (
                  <div>
                    {values.work.map((friend, index) => (
                      <React.Fragment key={index}>
                        <hr />
                        <button className="btn btn-warning" type="button" onClick={() => arrayHelpers.insert(index, { job_title: '', company: '', start_date: '', end_date: '' })}>+</button>
                        <div>
                          <MyInputField label="Job title" type="text" name={`work.[${index}].job_title`} />
                          <MyInputField label="Company" type="text" name={`work.${index}.company`} />
                          <MyInputField label="Start date" type="date" name={`work.${index}.start_date`} />
                          <MyInputField label="End date" type="date" name={`work.${index}.end_date`} />
                        </div>
                        <button className="btn btn-danger" type="button" onClick={() => arrayHelpers.remove(index)}>Remove</button>
                      </React.Fragment>
                    ))}
                    <button className="btn btn-primary" type="submit">Next</button>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </div>
    </div>
  )
}