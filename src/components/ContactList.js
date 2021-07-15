import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    // console.log(props)

    const  inputEl = useRef("");
    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }

    // const contacts = [{
    //     id: "1",
    //     name: "Geovic",
    //     email: "fgeovic@gmail.com"
    // }]
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
      
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }

    return (
        <div className="bg-blend-darken p-4 shadow text-gray-700 font-bold mb-5 w-96">
          
            <h1 className="pl-4 pb-4 col-span-2 text-lg">Contact List
            </h1>

            <div>
            <input className="m-4 shadow appearance-none border rounded w-9/12 pl-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={inputEl}
            placeholder="Search" 
            value={props.term}
            onChange={getSearchTerm}
            />
            </div>
                    
            <Link to="/add">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded p-1 ml-4">Add New Contact</button>
            </Link>
            <div>
            {renderContactList}
            </div>
        </div>
    )
};
export default ContactList;