import React from 'react'
import { Formik, useField, Form, Field } from 'formik'
import { StyleSheet, View, Button } from 'react-native'
import StyledTextInput from '../components/StyledTextInput.jsx'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        maring: 12
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        width: 100
    }
})

const FormikInputValue = ({ name, ...props }) => {
    
    const [field, meta, helpers] = useField(name)    

    return (
        <StyledTextInput            
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
    )
}

function validateEmail(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
     error = 'Invalid email address';
   }
   return error;
}

function validateUsername(value) {
   let error;
   if (value === 'admin') {
     error = 'Nice try!';
   }
   return error;
}

export default function LoginPage2() {    

    return (
        <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         username: '',
         email: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form>
           <Field name="email" validate={validateEmail} />
           {errors.email && touched.email && <div>{errors.email}</div>}
 
           <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}
 
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
    )
}