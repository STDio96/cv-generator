import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { isEmpty } from '../../isEmpty'

const FinalCV = () => {
  const personalInfo = useSelector(state => state.firstStep.personal);
  const univer = useSelector(state => state.firstStep.study);
  const work = useSelector(state => state.firstStep.work);
  const history = useHistory();

  if (isEmpty(work[0]) || isEmpty(univer[0]) || isEmpty(personalInfo)) {
    history.push('/steps/3')

    console.log('you should\'t be here')
    return <></>
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
      {univer.map((record, index) => {
        if (record.hasOwnProperty('title')) {
          return <div key={index}>
            {record.title} - {record.field_of_study}<br />
            {record.start_date} - {record.end_date}
          </div>
        }
      })}
    </div>
    <hr />
    <div className="work">
      {work.map((record, index) => {
        if (record.hasOwnProperty('company')) {
          return <div key={index}>
            {record.company} - {record.job_title}<br />
            {record.start_date} - {record.end_date}
          </div>
        }
      })}
    </div>
  </div>
}

export default FinalCV;
