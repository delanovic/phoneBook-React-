import React, { useState, useEffect, useInsertionEffect } from "react";

import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
    const KEY = "contacts";
    let id = Math.random().toString(36).substring(7);
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id, ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    };
    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(KEY, JSON.stringify(contacts)));
        if (retriveContacts) setContacts(retriveContacts)
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(contacts));
    }, [contacts]);
    return (
        <div className="app">
            <Header />
            <AddContact addContactHandler={addContactHandler} />

            <ContactList contacts={contacts} getContactId={removeContactHandler} />
        </div>
    );
}

export default App;