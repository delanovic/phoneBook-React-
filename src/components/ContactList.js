import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="items">
                <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id}></ContactCard>
            </div>
        );
    })
    return <div className="list">{renderContactList}</div>
}

export default ContactList