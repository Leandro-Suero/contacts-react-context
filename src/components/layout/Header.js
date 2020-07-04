import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <Link to="/" className="navbar-brand">
                {props.title}
            </Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home" /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                            <i className="fas fa-plus" /> Add contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="fas fa-question" /> About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
