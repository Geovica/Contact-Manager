import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)

    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
      
    });
    return (
        <div className="bg-blend-darken p-4 shadow text-gray-700 text-l font-bold mb-5">
            <h1 className="pl-4 pb-4">List</h1>
            {renderContactList}
        </div>
    )
};
export default ContactList;