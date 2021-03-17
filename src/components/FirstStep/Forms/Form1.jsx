import React, { useState } from 'react'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux'


const Form1 = ({ handleSubmit }) => {
    const required = false;
    const dispatch = useDispatch();

    const [values, setValues] = useState({});
    const handleFieldChange = (data) => {
        // if (value) {
        setValues({ ...values, ...data });
        // console.log(values, fieldId, `${value}`)
        // }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        // dispatch(saveForm());
        handleSubmit(values);
    }

    return <form className="needs-validation" onSubmit={onSubmit}>
        <Input label="First Name" onChange={handleFieldChange} required={required} />
        <Input label="Last Name" onChange={handleFieldChange} required={required} />
        <Input label="Job" onChange={handleFieldChange} required={required} />
        <Input label="Phone" onChange={handleFieldChange} required={required} />
        <Input label="Email" onChange={handleFieldChange} required={required} />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form >
}

export default Form1;
