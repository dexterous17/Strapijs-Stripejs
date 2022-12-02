import React from "react";
import { useField } from 'formik';

export default function CheckFilled({ className, label, ...props }) {
    const [field] = useField(props);
    return (
        <div className={className}>
            <div className='Login_Checkboxs'>
                <label htmlFor={field.name}>{label}</label>
            </div>
            <div className='Login_labels'>
                <input
                    className=""
                    {...field}
                    {...props}
                    autoComplete="off" />
            </div>
        </div>
    )
}