import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)

    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }

    const contacts = [{
        id: "1",
        name: "Geovic",
        email: "fgeovic@gmail.com"
    }]
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
      
    });
    return (
        <div className="bg-blend-darken p-4 shadow text-gray-700 font-bold mb-5 w-96">
          
            <h1 className="pl-4 pb-4 col-span-2 text-lg">Contact List
            </h1>
            <Link to="/add">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded p-1 ml-4">Add New Contact</button>
            </Link>
  
            {renderContactList}
        </div>
    )
};
export default ContactList;