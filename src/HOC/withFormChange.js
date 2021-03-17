import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../ducks/firstStep'
import { changeInput } from '../ducks/formsData';

const withFormChange = (Component) => {
    const WithFormChange = (props) => {
        const dispatch = useDispatch();

        const isCompleted = useSelector(state => state.firstStep.isCompleted);
        const stepData = useSelector(state => state.firstStep.stepData);

        const changeHandler2 = () => {
            // console.log(props)
            // dispatch(changeInput());
        }

        return <Component saveState={changeHandler2} {...props} />
    }

    return WithFormChange;
}

export default withFormChange;