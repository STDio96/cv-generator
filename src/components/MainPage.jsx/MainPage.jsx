import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import FirstStep from '../FirstStep/FirstStep';

export default function MainPage() {
  const dispatch = useDispatch();

  const isCompleted = useSelector(state => state.firstStep.isCompleted);
  const stepData = useSelector(state => state.firstStep.stepData);

  let info = {
    "0": {
      "first_name": "Sergo",
      "last_name": "Rim",
      "job": "Mid2Sen JS Developer",
      "phone": "0685511115",
      "email": "sergo@gmail.com"
    },
    "1": {
      "0": {
        "title": "univer1",
        "field_of_study": "computer science",
        "start_date": "Sep 2016",
        "end_date": "Jun 2018"
      },
      "1": {
        "title": "univer2",
        "field_of_study": "computer science",
        "start_date": "Sep 2018",
        "end_date": "Dec 2019"
      }
    },
    "2": {
      "0": {
        "job_title": "Support Agent",
        "company": "ZoomSupport",
        "start_date": "Oct 2017",
        "end_date": "Aug 2019"
      },
      "1": {
        "job_title": "Support Agent",
        "company": "Crowdin",
        "start_date": "Mar 2020",
        "end_date": ""
      }
    }
  }

  let form1_title = 'First step';

  // console.log(info[0])

  return <div className="row">
    <div className="col-12">
    </div>

    <FirstStep title={form1_title} />
  </div>
}
