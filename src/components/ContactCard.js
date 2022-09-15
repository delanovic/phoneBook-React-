import React from "react";


const ContactCard = (props) => {
    const { id, name, number } = props.contact;
    return (

        <div className="item">
            <div className="content">

                <div className="name">{name}</div>
                <div className="number">{number}</div>
                <i class="fa-solid fa-trash-can" onClick={() => props.clickHander(id)}></i>
            </div>
        </div>

    );
};

export default ContactCard;