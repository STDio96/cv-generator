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
            {/* <div className="position-relative m-4">
                <div className="progress" style={{ height: '1px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: '2rem', height: '2rem' }}>1</button>
                <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: '2rem', height: '2rem' }}>2</button>
                <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{ width: '2rem', height: '2rem' }}>3</button>
            </div> */}
        </div>
        <FirstStep />
        {isCompleted ? '1' : '0'}
        <button onClick={() => { dispatch(saveForm({ test1: 'hello1', test2: 'hello2' })) }}>Click me</button>
    </div>
}
