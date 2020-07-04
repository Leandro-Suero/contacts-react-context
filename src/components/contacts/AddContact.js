import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { Consumer } from "../../context";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {},
    };

    handleSubmit = (dispatch, evt) => {
        evt.preventDefault();
        const { name, email, phone } = this.state;
        //error check
        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }
        if (email === "") {
            this.setState({ errors: { email: "email is required" } });
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: "phone is required" } });
            return;
        }

        const newContact = { name, email, phone, id: 69 };
        dispatch({ type: "ADD_CONTACT", payload: newContact });
        //clear state
        this.setState({ name: "", email: "", phone: "", errors: {} });
        this.props.history.push("/");
    };

    handleChange = (evt) => {
        this.setState({ ...this.state, [evt.target.name]: evt.target.value });
    };

    render() {
        const { name, phone, email, errors } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.handleSubmit.bind(
                                        this,
                                        dispatch
                                    )}
                                >
                                    <TextInputGroup
                                        label="Name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter name..."
                                        onChange={this.handleChange}
                                        value={name}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter email..."
                                        onChange={this.handleChange}
                                        value={email}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        type="text"
                                        name="phone"
                                        placeholder="Enter phone..."
                                        onChange={this.handleChange}
                                        value={phone}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
