import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Escribe un email valido')
        .required('Email is required'),
        password: yup
            .string()
            .min(5,'Top short')
            .max(1000, 'Top long')
            .required('Password is required')
})