import React from 'react'
import { Formik, useField } from 'formik'
import { StyleSheet, View, Button } from 'react-native'
import StyledTextInput from '../components/StyledTextInput.jsx'
import StyledText from '../components/StyledText.jsx'

import { loginValidationSchema } from '../validationSchemas/login.jsx'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 20,
        marginTop: 0
    },
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
        <>
            <StyledTextInput            
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

const validate = values => {
    const errors = {}

    if(!values.email){
        errors.email = 'Email is required'            
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is not correct'
    }
    console.log(errors)
    return errors    
}

export default function LoginPage() {    
    return (
        <Formik             
            //validate={validate}
            validationSchema={loginValidationSchema}
            initialValues={initialValues} 
            onSubmit={values => {
                console.log(values)                 
            }}
        >
            {({ handleSubmit, values }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue                             
                            name='email'                            
                            placeholder='E-mail'                                                                                    
                        />                           
                        <FormikInputValue 
                            name='password'                            
                            placeholder='Password'                            
                            secureTextEntry                            
                        />
                        <Button onPress={handleSubmit} title='Log In' />
                    </View>
                )
            }}
        </Formik>
    )
}