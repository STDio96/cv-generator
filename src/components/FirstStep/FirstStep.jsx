import React, { useState } from 'react'
import Input from './Forms/Input'
import Form1 from './Forms/Form1'

const FirstStep = () => {
    const [errors, setErrors] = useState([]);

    const handleSubmit = (values) => {
        console.log(values)
        Object.entries(values).forEach(x => {
            console.log(x[0] + ' :: ' + x[1])
            if (!x[1] || x[1] === '') {
                console.log(x[0] + ' has to be filled');
                setErrors(...errors, `${x[0]} should be filled in`);
            }
        });
        console.log(errors)
    }

    return <div className="col-12 d-flex justify-content-center">
        {/* <div className="alert alert-danger"><ul>{errors && errors.map(error => <li>{error}</li>)}</ul></div> */}
        <Form1 handleSubmit={handleSubmit} />
    </div>
}

export default FirstStep;
