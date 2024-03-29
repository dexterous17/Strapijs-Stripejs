import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ className, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={className}>
            <div className='Login_labels'>
                <label htmlFor={field.name}>{label}</label>
                <ErrorMessage component="div" name={field.name} className="error" />
            </div>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
        </div>
    )
}