import { MainContainer } from "./App.styled";
import React, { Component } from 'react';
import {ContactForm } from "../ContactForm"
import { ContactsList } from "../ContactsList/ContactsList";
import { Filter } from "components/Filter"
import { nanoid } from "nanoid";



export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  changeFilter = ({target}) => {
    const {value} = target
    this.setState({filter: value})  
}

  handleAddContact = ({ name, number }) => {
    const contactId = nanoid()
    const { contacts } = this.state
    const newContact = {
      id: contactId,
      name,
      number
    }
    
    
    const isContactExist = contacts.some(contact => 
      contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
    )
    
    if (isContactExist) {
      alert('Contact already exist!')
      return
    } 
    
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact]
    }
    ))
    }

  handleDeleteContact = (contactId) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  
  
  getVisibleContacts = () => {
    const { filter , contacts } = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
  
  
render() {
  
  const { filter } = this.state
  const { handleAddContact, changeFilter, getVisibleContacts, handleDeleteContact } = this;

  const visibleContacts = getVisibleContacts()
  

    return (
      <MainContainer>
        <h1>Phonebook</h1>
        <ContactForm 
          handleAddContact={handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={ changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          handleDeleteContact={handleDeleteContact}
        />
    </MainContainer>
    )
}
}