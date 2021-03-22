import React from 'react'
import { StudyForm } from '../AdvancedForm/StudyForm';
import FirstStep from '../FirstStep/FirstStep';
import { useParams } from 'react-router-dom'
import { WorkList } from '../AdvancedForm/WorkForm';

export default function MainPage() {
  const { id } = useParams();

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
      return <FirstStep title={form1_title} />
  }
}
