import { FormStyled, FormItem, FormBtn, FormLabel, FormInput } from "./ContactForm.styled"
import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameId = nanoid()
    numberId = nanoid()

    onChangeInput = (e) => {
    const {name, value} = e.target
        console.log('e.target', e.target)
        this.setState({
            [name]: value
        })
        console.log('this.state', this.state)
    }

    onSubmitForm = e => {
        e.preventDefault()

        this.props.handleAddContact({
            name: this.state.name,
            number: this.state.number
        });
        this.setState({ name: '' , number: ''})
    }

    render() {
        const { nameId, numberId, onSubmitForm, onChangeInput } = this
        const{name, number} = this.state
        return  (
            <FormStyled onSubmit={onSubmitForm}>
                <FormItem >
                    <FormLabel htmlFor={nameId}>Name</FormLabel>
                    <FormInput type="text" name="name" id={nameId} onChange={onChangeInput} value={name} required/>
                </FormItem>
                <FormItem >
                    <FormLabel htmlFor={numberId}>Number</FormLabel>
                    <FormInput type="tel" name="number" id={numberId} onChange={onChangeInput} value={number} required/>
                </FormItem>
                <FormBtn type="submit">Submit</FormBtn>
            </FormStyled>
            )
    }
}

ContactForm.propTypes = {
    handleAddContact: PropTypes.func.isRequired
}