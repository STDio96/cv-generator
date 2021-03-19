import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import MyInputField from '../MyInputField/MyInputField';
import { useHistory } from 'react-router';
import * as Yup from 'yup'

export const StudyForm = ({ title }) => {
  const dispatch = useDispatch();
  const currentState = useSelector(state => state.firstStep);
  const history = useHistory();

  const goBack = () => {
    console.log(history)
    history.goBack();
  }

  console.log('firstStep', currentState)
  if (!currentState.personal) {
    console.log('you should\'t be here')
    history.push('/steps/1')
  }

  const schema = Yup.object().shape({
    study: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().min(3, "Please enter at least 3 characters").required("Required"),
        field_of_study: Yup.string().min(3, "Please enter at least 3 characters").required("Required"),
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

  return <div className="row">
    <div className="col-12">
      <button onClick={goBack}>back</button>
      <h1 className="text-center">{title}</h1>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <Formik
        initialValues={
          {
            study: [
              ...currentState.study ?? { title: '', field_of_study: '', start_date: '', end_date: '' }
              /* { title: 'user1', field_of_study: 'computer science', start_date: '2020-01-01', end_date: '2021-01-01' },
              { title: 'user3', field_of_study: 'programming', start_date: '2021-01-01', end_date: '2022-01-01' },
              { title: 'user3', field_of_study: 'philosophy', start_date: '2022-01-01', end_date: '2023-01-01' }, */
            ]
          }
        }
        validationSchema={schema}
        validateOnMount={true}
        onSubmit={values =>
          setTimeout(() => {
            dispatch(saveForm('study', values.study))
            history.push('/steps/3')
          }, 500)
        }
        render={({ values }) => (
          <Form className="w-50">
            <FieldArray
              name="study"
              render={arrayHelpers => (
                <div>
                  {values.study.map((friend, index) => (
                    <React.Fragment key={index}>
                      <hr />
                      <button className="btn btn-success" type="button" onClick={() => arrayHelpers.insert(index, { title: '', field_of_study: '', start_date: '', end_date: '' })}>+</button>
                      <div>
                        <MyInputField label="Title" type="text" name={`study.${index}.title`} />
                        <MyInputField label="Field of study" type="text" name={`study.${index}.field_of_study`} />
                        <MyInputField label="Start date" type="date" name={`study.${index}.start_date`} />
                        <MyInputField label="End date" type="date" name={`study.${index}.end_date`} />

                        <button className="btn btn-danger" type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                      </div>
                    </React.Fragment>
                  ))}
                  <button className="btn btn-success" type="button" onClick={() => arrayHelpers.insert({ title: '', field_of_study: '', start_date: '', end_date: '' })}>+</button>
                  <button type="submit" className="btn btn-primary">Next</button>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  </div>
}