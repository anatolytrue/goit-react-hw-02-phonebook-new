
import { List } from "./ContactsList.styled"
import { NotificationMessage } from "components/NotificationMessage"
import PropTypes from 'prop-types';


export const ContactsList = ({ contacts, handleDeleteContact }) => 
    <>
        {contacts.length === 0
            ? <NotificationMessage message="No contacts yet" />
            : <List>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}:&nbsp;
                        {contact.number}
                        <button type="button" onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                    </li> 
                ))}
                
            </List>}
    </>

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })

    ),
    handleDeleteContact: PropTypes.func.isRequired
}