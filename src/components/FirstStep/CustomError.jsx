import React from 'react';

const CustomError = ({ children }) => {
    return <div className="invalid-feedback">
        {children}
    </div>
}

export default CustomError;
