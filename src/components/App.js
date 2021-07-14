import React, { useEffect, useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, {id:uuid_v4(), ...contact }]);
    };

    const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setContacts(newContactList);
    }
 
    useEffect(() => {
     const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts) setContacts(retriveContacts);
    }, []);

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "Geo",
  //     "email": "fgeovic@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     "name": "Izaiah",
  //     "email": "Izaiah@gmail.com"
  //   }
  // ]
  return (
  <div className="container w-4/5">
    <Header />
    <AddContact addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHandler} />
  </div>
  );
}

export default App;
