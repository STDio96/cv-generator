import React, { useEffect, useState } from 'react';
import withFormChange from '../../../HOC/withFormChange';
import { useDispatch, useSelector } from 'react-redux'
import { changeInput } from '../../../ducks/formsData';

const Input = ({ type = 'text', label, required, saveState, onChange }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    let newType = label.trim().toLowerCase().replaceAll(' ', '_');
    const changeHandler = (e) => {
        console.log('onChange')
        setValue(e.target.value)
        // saveState();
        // console.log(label, value)
    }

    useEffect(() => {
        onChange({ [newType]: value });
        // console.log('value is updated:', newType, value)
        // dispatch(changeInput({ [newType]: value }))
    }, [value])

    return <div className="row g-3">
        <div className="col-sm-12">
            <label className="form-label">
                {label}
                <input type={type} value={value} onChange={changeHandler} required={required} className="form-control" />
            </label>
            {/* <div className="invalid-feedback">
                {label} is required.
            </div> */}
        </div>
    </div>
}

// export default withFormChange(Input);
export default Input;
