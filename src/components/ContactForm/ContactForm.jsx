import { FormStyled, FormItem, FormBtn, FormLabel, FormInput } from "./ContactForm.styled"
import { nanoid } from 'nanoid'
// import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

export const ContactForm = ({ handleAddContact }) => {
    const nameId = nanoid()
    const numberId = nanoid()

    const initialValues = {
        name: '',
        number: ''
    }

    const handleSubmit = (values, {resetForm}) =>{
        handleAddContact({
            name: values.name,
            number: values.number
        });
        resetForm()
    }

    let validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        number: Yup.string().required('Number is required').matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid number format. Use XXX-XX-XX'),
    });


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ dirty, isValid}) => (
                <Form as={FormStyled} autoComplete="off">
                    <FormItem >
                        <FormLabel htmlFor={nameId}>Name</FormLabel>
                        <Field as={FormInput} type="text" name="name" id={nameId} required />
                        <ErrorMessage name="name" component="div"/>
                    </FormItem>
                    <FormItem >
                        <FormLabel htmlFor={numberId}>Number</FormLabel>
                        <Field as={FormInput} type="tel" name="number" id={numberId} required />
                        <ErrorMessage name="number" component="div" />
                    </FormItem>
                    <FormBtn type="submit"disabled={!dirty||!isValid}>Submit</FormBtn>
                </Form>
            )}

        </Formik>

    )
}

ContactForm.propTypes = {
    handleAddContact: PropTypes.func.isRequired
}