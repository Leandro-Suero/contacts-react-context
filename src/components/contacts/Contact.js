import React, { Component } from "react";
import { Consumer } from "../../context";

class Contact extends Component {
    state = {
        showContactInfo: false,
    };

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
    };

    render() {
        const { id, name, phone, email } = this.props.contact;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                <i
                                    onClick={this.onShowClick}
                                    className="fas fa-sort-down"
                                    style={{ cursor: "pointer" }}
                                ></i>
                                <i
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                    className="fas fa-times"
                                    style={{
                                        cursor: "pointer",
                                        float: "right",
                                        color: "red",
                                    }}
                                ></i>
                            </h4>
                            {this.state.showContactInfo && (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            )}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contact;
