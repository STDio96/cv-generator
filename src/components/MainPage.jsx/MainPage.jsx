import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../ducks/firstStep'
import FirstStep from '../FirstStep/FirstStep';

export default function MainPage() {
    const dispatch = useDispatch();

    const isCompleted = useSelector(state => state.firstStep.isCompleted);
    const stepData = useSelector(state => state.firstStep.stepData);

    return <div className="row">
        <div className="col-12">
        </div>
        
        <FirstStep />
    </div>
}
