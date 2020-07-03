import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export class Provider extends Component {
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
        dispatch: (action) => {
            this.setState((state) => reducer(state, action));
        },
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;
