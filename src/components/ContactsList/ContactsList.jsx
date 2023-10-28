
import { List, ListItem, ListBtn } from "./ContactsList.styled"
import { NotificationMessage } from "components/NotificationMessage"
import PropTypes from 'prop-types';


export const ContactsList = ({ contacts, handleDeleteContact }) => 
    <>
        {contacts.length === 0
            ? <NotificationMessage message="No contacts yet" />
            : <List>
                {contacts.map((contact) => (
                    <ListItem key={contact.id}>
                        {contact.name}:&nbsp;
                        {contact.number}
                        <ListBtn
                            type="button"
                            onClick={() => handleDeleteContact(contact.id)}>
                            Delete
                        </ListBtn>
                    </ListItem> 
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