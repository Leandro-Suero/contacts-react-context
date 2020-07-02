import React from "react";

const Header = (props) => {
    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <a href="/" className="navbar-brand">
                {props.title}
            </a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
