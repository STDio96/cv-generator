import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { saveForm } from '../../ducks/firstStep'

const FinalCV = () => {
  const personalInfo = useSelector(state => state.firstStep.personal);
  const univer = useSelector(state => state.firstStep.study);
  const work = useSelector(state => state.firstStep.work);

  const history = useHistory();

  // univer = Object.entries(univer).map((e) => (e[1]));
  // work = Object.entries(work).map((e) => (e[1]));

  // console.log(personalInfo)

  if (!work) {
    history.push('/steps/1');
  }

  return <div>
    <div className="personalInfo">
      {personalInfo.first_name} {personalInfo.last_name}<br />
      {personalInfo.job}<br />
      {personalInfo.phone}<br />
      {personalInfo.email}
    </div>
    <hr />
    <div className="univer">
      {univer.map(record => {
        if (record.hasOwnProperty('title')) {
          return <div>
            {record.title} - {record.field_of_study}<br />
            {record.start_date} - {record.end_date}
          </div>
        }
      })}
    </div>
    <hr />
    <div className="work">
      {work.map(record => {
        if (record.hasOwnProperty('company')) {
          return <div>
            {record.company} - {record.job_title}<br />
            {record.start_date} - {record.end_date}
          </div>
        }
      })}
    </div>
  </div>
}

export default FinalCV;
