import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import { StudyForm } from '../AdvancedForm/StudyForm';
import FirstStep from '../FirstStep/FirstStep';
// import { formsJSON } from '../../forms'
import { useParams, useHistory } from 'react-router-dom'
import { WorkList } from '../AdvancedForm/WorkForm';

export default function MainPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  // history.block();

  const isCompleted = useSelector(state => state.firstStep.isCompleted);
  const stepData = useSelector(state => state.firstStep.stepData);

  let form1_title = 'Basic info';
  let form2_title = 'Study';
  let form3_title = 'Work';

  switch (Number(id)) {
    case 1:
      return <FirstStep title={form1_title} />
    case 2:
      return <StudyForm title={form2_title} />
    case 3:
      return <WorkList title={form3_title} />
    default:
      return '1';
  }

  return <div className="row">
    <div className="col-12">
    </div>

    {/* <FirstStep title={form1_title} /> */}
    {/* <FriendList /> */}
  </div>
}
