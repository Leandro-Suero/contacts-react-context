import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: newContacts,
        });
    };

    render() {
        return (
            <Consumer>
                {(contextState) => {
                    const { contacts } = contextState;
                    return (
                        <React.Fragment>
                            <h1 className="">Contactos</h1>
                            {contacts.map((contact) => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
