import * as Yup from 'yup';


export const validatelogin = Yup.object({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
})

export const validateregister = Yup.object({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
})

export const validatechangepassword = Yup.object({
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm Password is required'),
    newpassword: Yup.string()
        .min(6, 'New Password must be at least 6 charaters')
        .required('New Password is required'),
    confirmnewpassword: Yup.string()
        .oneOf([Yup.ref('newpassword'), null], 'Password must match')
        .required('Confirm New Password is required'),
})