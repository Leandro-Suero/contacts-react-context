import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Pedro Marmol",
                email: "algo@gmail.com",
                phone: "5476876",
            },
            {
                id: 2,
                name: "Pedro2 Marmol",
                email: "algo2@gmail.com",
                phone: "2222222222",
            },
            {
                id: 3,
                name: "Pedro3 Marmol",
                email: "algo3@gmail.com",
                phone: "33333333",
            },
        ],
    };

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: newContacts,
        });
    };

    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
                <h1 className="">Contactos</h1>
                {contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onDeleteHandler={this.deleteContact.bind(
                            this,
                            contact.id
                        )}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;
